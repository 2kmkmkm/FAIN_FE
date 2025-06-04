import PatientInfo from "../components/emergency/PatientInfo";
import Report from "../components/emergency/Report";
import Hospital from "../components/emergency/Hospital";
import call from "../assets/call.svg";
import ResponseModal from "../modals/ResponseModal";
import Streaming from "../components/streaming/Streaming";
import type { RootState } from "../app/store";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getEmergencyReport } from "../api/emergency";
import { format } from "date-fns";
import { formatDay } from "../utils/dateUtils";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";

export default function EmergencyPage() {
  const { reportId } = useParams();
  const id = Number(reportId);

  console.log(reportId);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const patient = useSelector((state: RootState) => state.patient);

  const { data: emergencyData } = useQuery({
    queryKey: ["emergencyReport", reportId],
    queryFn: () => getEmergencyReport(id),
    enabled: !!reportId,
  });

  if (!emergencyData) return null;

  const formattedDate =
    emergencyData?.situationTime &&
    `${format(emergencyData.situationTime, "yyyy / MM / dd")} (${formatDay(
      emergencyData.situationTime
    )}) ${format(emergencyData.situationTime, "HH:mm")}`;

  return (
    <>
      <Header title="낙상 감지" />
      <div className="flex flex-col px-10 pt-7 pb-12 gap-9 min-h-full">
        <div className="flex flex-col gap-2.5 text-center">
          <div className="body-m-bold">{formattedDate}</div>
          <div className="body-m">{patient.name}님의 낙상이 감지되었습니다</div>
        </div>
        <Streaming />
        <PatientInfo
          bloodtype={patient.bloodtype}
          height={patient.height}
          weight={patient.weight}
          disease={patient.disease}
          allergic={patient.allergic}
          medicine={patient.medicine}
        />
        <Report content={emergencyData.report} />
        <Hospital
          hospitalName={patient.hospitalName}
          hospitalTel={patient.hospitalTel}
        />
        <div className="flex flex-row gap-4">
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
