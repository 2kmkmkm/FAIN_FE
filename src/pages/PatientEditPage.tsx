import Header from "../components/common/Header";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import search from "../assets/search.svg";
import Dropdown from "../components/common/Dropdown";
import EditCompleteModal from "../modals/EditCompleteModal";
import CustomPostcode from "../components/common/CustomPostcode";
import type { DaumPostcodeData } from "../components/common/CustomPostcode";
import { fullAddress, parseAddress } from "../utils/addressUtils";
import { PATIENT_INFO_CONFIG } from "../type/userType";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useMutation } from "@tanstack/react-query";
import { patchUserInfo, getUserInfo } from "../api/user";
import { setPatient } from "../app/patientSlice";

export default function PatientEditPage() {
  const patient = useAppSelector((state) => state.patient);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showPostcode, setShowPostcode] = useState<boolean>(false);

  const [zoneCode, setZoneCode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [formData, setFormData] = useState({ ...patient });

  useEffect(() => {
    const { zoneCode, roadAddress, detailAddress } = parseAddress(
      patient.address
    );
    setZoneCode(zoneCode);
    setRoadAddress(roadAddress);
    setDetailAddress(detailAddress);
  }, [patient.address]);

  useEffect(() => {
    const address = fullAddress(zoneCode, roadAddress, detailAddress);
    setFormData((prev) => ({ ...prev, address }));
  }, [zoneCode, roadAddress, detailAddress]);

  const mutation = useMutation({
    mutationFn: () => patchUserInfo(formData),
    onSuccess: async () => {
      const { patient: newPatient } = await getUserInfo();
      dispatch(setPatient(newPatient));
      setIsModalOpen(true);
    },
    onError: (err) => {
      console.error("환자 정보 수정 실패:", err);
    },
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: key === "height" || key === "weight" ? Number(value) : value,
    }));
  };

  const handleComplete = (data: DaumPostcodeData) => {
    setZoneCode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setShowPostcode(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <Header title="환자 정보 수정" />
      <form
        id="patient-edit-form"
        className="flex flex-col px-12 py-8 gap-8"
        onSubmit={handleSubmit}
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <div className="flex flex-col gap-5">
          {PATIENT_INFO_CONFIG.map(({ key, label }) => {
            if (key === "address") return null;
            const value = formData[key as keyof typeof formData];

            if (key === "birth") {
              return (
                <div key={key} className="flex flex-col gap-5">
                  <div className="flex gap-5 items-start">
                    <div className="w-24 text-placeholder body-s">{label}</div>
                    <Input
                      isEdit
                      value={value}
                      type="date"
                      className="h-[16.67px] bg-[#F9F9F9]"
                      onChange={(e) => handleChange(key, e.target.value)}
                    />
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="w-24 text-placeholder body-s pt-[2px]">
                      주소
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1.5">
                        <Input
                          isEdit
                          placeholder={zoneCode}
                          type="text"
                          onChange={(e) => setZoneCode(e.target.value)}
                        />
                        <button
                          type="button"
                          className="bg-main text-white body-s w-fit px-1.5 rounded-[8px] flex justify-center items-center"
                          onClick={() => setShowPostcode(true)}
                        >
                          <img src={search} className="w-5" />
                        </button>
                      </div>
                      {showPostcode && (
                        <CustomPostcode onComplete={handleComplete} />
                      )}
                      <Input
                        placeholder={roadAddress}
                        isEdit
                        type="text"
                        onChange={(e) => setRoadAddress(e.target.value)}
                      />
                      <Input
                        isEdit
                        placeholder={detailAddress}
                        type="text"
                        onChange={(e) => setDetailAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              );
            }

            if (key === "bloodtype") {
              return (
                <div key={key} className="flex gap-5 items-start">
                  <div className="w-24 text-placeholder body-s pt-[2px]">
                    {label}
                  </div>
                  <Dropdown
                    isSmall
                    category={formData.bloodtype}
                    selectedValue={formData.bloodtype}
                    onSelect={(value) => handleChange("bloodtype", value)}
                    list={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                  />
                </div>
              );
            }

            return (
              <div key={key} className="flex gap-5 items-start">
                <div className="w-24 text-placeholder body-s pt-[2px]">
                  {label}
                </div>
                <Input
                  isEdit
                  value={value}
                  placeholder={value}
                  type="text"
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-auto">
          <Button label="수정" type="submit" />
        </div>
      </form>

      {isModalOpen && <EditCompleteModal category="환자" />}
    </>
  );
}
