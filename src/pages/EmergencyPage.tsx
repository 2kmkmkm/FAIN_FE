import PatientInfo from "../components/emergency/PatientInfo";
import Report from "../components/emergency/Report";
import Hospital from "../components/emergency/Hospital";
import call from "../assets/call.svg";
import ResponseModal from "../modals/ResponseModal";
import type { RootState } from "../app/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEmergencyReport } from "../api/emergency";
import { format } from "date-fns";
import { formatDay } from "../utils/dateUtils";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";

export default function EmergencyPage() {
  const reportId = useParams();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [situationTime, setSituationTime] = useState<Date>();
  const [report, setReport] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [hospitalTel, setHospitalTel] = useState<string>("");

  useEffect(() => {
    const fetchEmergencyData = async () => {
      try {
        const res = await getEmergencyReport(Number(reportId));
        setSituationTime(res.situation_time);
        setReport(res.report);
        setHospitalName(res.hospital_name);
        setHospitalTel(res.hospital_tel);
      } catch (error) {
        console.error("getEmergencyReport Error: ", error);
      }
    };

    fetchEmergencyData();
  }, [reportId]);

  const formattedDate =
    situationTime &&
    `${format(situationTime, "yyyy / MM / dd")} (${formatDay(
      situationTime
    )}) ${format(situationTime, "HH:mm")}`;

  const patient = useSelector((state: RootState) => state.patient);

  return (
    <>
      <Header title="낙상 감지" />
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
        <Report content={report} />
        <Hospital hospitalName={hospitalName} hospitalTel={hospitalTel} />
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
