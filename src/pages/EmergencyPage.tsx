import PatientInfo from "../components/emergency/PatientInfo";
import Report from "../components/emergency/Report";
import Hospital from "../components/emergency/Hospital";
import call from "../assets/call.svg";
import ResponseModal from "../modals/ResponseModal";
import { useState } from "react";

export default function EmergencyPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col px-14 pt-7 pb-12 gap-8 min-h-full">
        <div className="flex flex-col gap-2.5 text-center">
          <div className="body-m-bold">2025 / 04 / 02 (수) 23:40</div>
          <div className="body-m">홍길동님의 낙상이 감지되었습니다</div>
        </div>
        <div className="w-full h-40 items-center justify-center flex">
          Streaming
        </div>
        <PatientInfo />
        <Report
          content=" 홍길동님의 기저질환과 여러 상황을 종합해 보았을 때, 심혈관 이상으로
          인한 급작스러운 의식 저하 가능성이 있습니다. 환자 상태를 즉시
          확인해주세요."
        />
        <Hospital />
        <div className="flex flex-row gap-2.5">
          <button
            className="bg-red py-3 rounded-[20px] flex justify-center items-center gap-3"
            onClick={() => (window.location.href = "tel: 119")}
          >
            <img src={call} className="w-4 flex justify-center" />
            <div className="body-m-bold text-white w-fit">119</div>
          </button>
          <button
            className="outline outline-2 outline-offset-[-2px] outline-placeholder py-3 rounded-[20px] flex justify-center items-center"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="body-m-bold text-placeholder">닫기</div>
          </button>
        </div>
      </div>
      {isModalOpen && <ResponseModal />}
    </>
  );
}
