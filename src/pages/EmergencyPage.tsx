import PatientInfo from "../components/emergency/PatientInfo";
import Report from "../components/emergency/Report";
import Hospital from "../components/emergency/Hospital";
import call from "../assets/call.svg";
import ResponseModal from "../modals/ResponseModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { getEmergencyAlert } from "../api/emergency";
import { format } from "date-fns";
import { formatDay } from "../utils/dateUtils";

export default function EmergencyPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [situationTime, setSituationTime] = useState<Date>();

  useEffect(() => {
    const fetchEmergencyData = async () => {
      try {
        const res = await getEmergencyAlert();
        setSituationTime(res.situation_time);
      } catch (error) {
        console.error("getEmergencyAlert Error: ", error);
      }
    };

    fetchEmergencyData();
  }, []);

  const patient = useSelector((state: RootState) => state.patient);

  const formattedDate =
    situationTime &&
    `${format(situationTime, "yyyy / MM / dd")} (${formatDay(
      situationTime
    )}) ${format(situationTime, "HH:mm")}`;

  return (
    <>
      <div className="flex flex-col px-14 pt-7 pb-12 gap-8 min-h-full">
        <div className="flex flex-col gap-2.5 text-center">
          <div className="body-m-bold">{formattedDate}</div>
          <div className="body-m">{patient.name}님의 낙상이 감지되었습니다</div>
        </div>
        <div className="w-full h-40 items-center justify-center flex">
          Streaming
        </div>
        <PatientInfo
          bloodType={patient.bloodType}
          height={patient.height}
          weight={patient.weight}
          disease={patient.disease}
          allergic={patient.allergic}
          medicine={patient.medicine}
        />
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
