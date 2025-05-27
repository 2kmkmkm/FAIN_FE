import Report from "../components/emergency/Report";
import { getHistoryDetail } from "../api/history";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/useRedux";
import { formatBirthInfo, formatDay, formatTime } from "../utils/dateUtils";
import { useParams } from "react-router-dom";

export default function HistoryDetailPage() {
  const reportId = useParams();

  const [situationTime, setSituationTime] = useState<Date>();
  const [report, setReport] = useState<string>("");
  const [actionType, setActionType] = useState<string>("");

  const name = useAppSelector((state) => state.patient.name);

  useEffect(() => {
    const fetchHistoryDetail = async () => {
      try {
        const res = await getHistoryDetail(Number(reportId));
        console.log("fetchHistoryDetail: ", res);
        setSituationTime(res.situation_time);
        setReport(res.report);
        setActionType(res.action_type);
      } catch (error) {
        console.error("fetchHistoryDetail Error: ", error);
      }
    };

    fetchHistoryDetail();
  });

  if (!situationTime) return null;

  const formattedDate = `${
    formatBirthInfo(String(situationTime)).formattedDate
  } ${formatDay(situationTime)} ${formatTime(situationTime)}`;

  return (
    <div className="flex flex-col px-14 pt-6 gap-7 min-h-screen">
      <div className="flex flex-col gap-2.5 text-center">
        <div className="body-m-bold">{formattedDate}</div>
        <div className="body-m">{name}님의 낙상 기록</div>
      </div>
      <div className="w-full h-40 items-center justify-center flex">
        Streaming
      </div>
      <Report content={report} />
      <div className="flex flex-row items-center">
        <div className="text-darkgray title">조치 방법 &gt;</div>
        <div className="text-alert title flex justify-end">{actionType}</div>
      </div>
    </div>
  );
}
