import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import search from "../assets/search.svg";
import { fullAddress, parseAddress } from "../utils/addressUtils";
import { PATIENT_INFO_CONFIG } from "../type/userType";
import { useState, useEffect } from "react";

const data = {
  name: "홍길동",
  birth: "2024-05-24",
  address: "(61188) 광주광역시 북구 용봉로 77 공과대학 7호관 215호",
  height: 180,
  weight: 70,
  bloodType: "A+",
  disease: "고혈압",
  allergy: "꽃가루",
  medicine: "혈압약",
  hospital: "전남대병원",
};

export default function PatientEditPage() {
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

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: key === "height" || key === "weight" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Header title="환자 정보 수정" isBack />
      <div className="flex flex-col px-12 pt-8 pb-8">
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            {PATIENT_INFO_CONFIG.map(({ key, label }) => {
              if (key === "address") return null;

              const value = formData[key as keyof typeof formData];
              const inputType =
                key === "height" || key === "weight" ? "number" : "text";

              return (
                <div key={key} className="flex flex-col gap-5">
                  <div className="flex gap-5 items-start">
                    <div className="w-24 text-placeholder body-s pt-[2px]">
                      {label}
                    </div>
                    <Input
                      isEdit
                      defaultValue={String(value)}
                      type={inputType}
                      onChange={(e) => handleChange(key, e.target.value)}
                    />
                  </div>

                  {key === "birth" && (
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
                          <button className="bg-main text-white body-s w-fit px-1.5 rounded-[8px] flex justify-center items-center">
                            <img src={search} className="w-5" />
                          </button>
                        </div>
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
                  )}
                </div>
              );
            })}
          </div>

          <Button label="수정" type="submit" />
        </form>
      </div>
    </>
  );
}
