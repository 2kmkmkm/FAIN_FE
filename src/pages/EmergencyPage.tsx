import Header from "../components/common/Header";
import PatientInfo from "../components/emergency/PatientInfo";
import Report from "../components/emergency/Report";
import Hospital from "../components/emergency/Hospital";
import call from "../assets/call.svg";

export default function EmergencyPage() {
  return (
    <>
      <Header title="낙상 감지" isBack />
      <div className="flex flex-col px-14 pt-6 pb-12 gap-7">
        <div className="flex flex-col gap-2.5 text-center">
          <div className="body-m-bold">2025 / 04 / 02 (수) 23:40</div>
          <div className="body-m">홍길동님의 낙상이 감지되었습니다</div>
        </div>
        <div className="w-full h-40 items-center justify-center flex">
          Streaming
        </div>
        <PatientInfo />
        <Report />
        <Hospital />
        <div className="flex flex-row gap-2.5">
          <button className="bg-red py-3 rounded-[20px] flex justify-center items-center gap-3">
            <img src={call} className="w-4 flex justify-center" />
            <div className="body-m-bold text-white w-fit">119</div>
          </button>
          <button className="outline outline-2 outline-offset-[-2px] outline-placeholder py-3 rounded-[20px] flex justify-center items-center">
            <div className="body-m-bold text-placeholder">닫기</div>
          </button>
        </div>
      </div>
    </>
  );
}
