import Button from "../components/common/Button";
import Input from "../components/common/Input";
import search from "../assets/search.svg";
import Dropdown from "../components/common/Dropdown";
import { fullAddress, parseAddress } from "../utils/addressUtils";
import { PATIENT_INFO_CONFIG } from "../type/userType";
import { useState, useEffect } from "react";
import EditCompleteModal from "../modals/EditCompleteModal";
import CustomPostcode from "../components/common/CustomPostcode";
import type { DaumPostcodeData } from "../components/common/CustomPostcode";
import Header from "../components/common/Header";
z;
export default function PatientEditPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showPostcode, setShowPostcode] = useState<boolean>(false);
  const [formData, setFormData] = useState({ ...data });

  const [zoneCode, setZoneCode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  useEffect(() => {
    const { zoneCode, roadAddress, detailAddress } = parseAddress(
      formData.address
    );
    setZoneCode(zoneCode);
    setRoadAddress(roadAddress);
    setDetailAddress(detailAddress);
  }, []);

  useEffect(() => {
    const address = fullAddress(zoneCode, roadAddress, detailAddress);
    setFormData((prev) => ({ ...prev, address: address }));
  }, [zoneCode, roadAddress, detailAddress]);

  const handleComplete = (data: DaumPostcodeData) => {
    setZoneCode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setShowPostcode(false);
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: key === "height" || key === "weight" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Header title="환자 정보 수정" />
      <form
        id="patient-edit-form"
        className="flex flex-col min-h-screen px-12 py-8 gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          {PATIENT_INFO_CONFIG.map(({ key, label }) => {
            if (key === "address") return null;

            const value = formData[key as keyof typeof formData];

            if (key === "birth") {
              return (
                <div key={key} className="flex flex-col gap-5">
                  <div className="flex gap-5 items-start">
                    <div className="w-24 text-placeholder body-s pt-[2px]">
                      {label}
                    </div>
                    <Input
                      isEdit
                      defaultValue={value}
                      type="date"
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
                          defaultValue={zoneCode}
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
                        isEdit
                        defaultValue={roadAddress}
                        type="text"
                        onChange={(e) => setRoadAddress(e.target.value)}
                      />
                      <Input
                        isEdit
                        defaultValue={detailAddress}
                        type="text"
                        onChange={(e) => setDetailAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              );
            }

            if (key === "bloodType") {
              return (
                <div key={key} className="flex gap-5 items-start">
                  <div className="w-24 text-placeholder body-s pt-[2px]">
                    {label}
                  </div>
                  <Dropdown
                    isSmall
                    category="혈액형"
                    selectedValue={formData.bloodType}
                    onSelect={(value) => handleChange("bloodType", value)}
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
                  defaultValue={String(value)}
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
