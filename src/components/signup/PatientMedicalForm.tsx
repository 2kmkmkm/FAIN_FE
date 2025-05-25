import Input from "../common/Input";
import search from "../../assets/search.svg";
import information from "../../assets/information.svg";
import Popup from "../common/Popup";
import type { PatientMedicalFormProps } from "../../type/userType";
import { useState, useRef } from "react";

export default function PatientMedicalForm({
  medical,
  handleMedicalChange,
}: PatientMedicalFormProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const infoIconRef = useRef<HTMLImageElement>(null);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="pl-2 flex flex-row items-center gap-2">
        <div className="title flex w-fit">환자 의료 정보</div>
        <div className="relative w-fit">
          <img
            ref={infoIconRef}
            src={information}
            className="w-4 cursor-pointer"
            onClick={() => setIsPopupOpen(true)}
          />
          {isPopupOpen && (
            <Popup
              anchorRef={infoIconRef}
              onClose={() => setIsPopupOpen(false)}
              contents={`질환, 알러지, 복용약은 쉼표로 구분해서 적어주세요.\n주요 병원은 최대 1개까지 선택 가능합니다.`}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <Input
          name="disease"
          placeholder="질환"
          value={medical.disease}
          onChange={handleMedicalChange}
        />
        <Input
          name="allergic"
          placeholder="알러지"
          value={medical.allergic}
          onChange={handleMedicalChange}
        />
        <Input
          name="medicine"
          placeholder="복용약"
          value={medical.medicine}
          onChange={handleMedicalChange}
        />
        <div className="flex flex-row gap-2 h-full">
          <Input
            name="hospital_name"
            placeholder="주요 병원"
            value={medical.hospitalName}
            onChange={handleMedicalChange}
          />
          <button
            type="button"
            className="bg-main text-white body-s w-14 px-1.5 rounded-[10px] flex justify-center items-center"
          >
            <img src={search} className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
