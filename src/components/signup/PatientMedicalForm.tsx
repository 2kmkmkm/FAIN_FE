import Input from "../common/Input";
import information from "../../assets/information.svg";
import Popup from "../common/Popup";
import type { PatientMedicalFormProps } from "../../type/userType";
import { useState, useRef } from "react";
import React from "react";

function PatientMedicalForm({
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

        <Input
          name="hospitalName"
          placeholder="주요 병원"
          value={medical.hospitalName}
          onChange={handleMedicalChange}
        />
        <Input
          name="hospitalTel"
          placeholder="병원 연락처"
          value={medical.hospitalTel}
          onChange={handleMedicalChange}
        />
      </div>
    </div>
  );
}

export default React.memo(PatientMedicalForm);
