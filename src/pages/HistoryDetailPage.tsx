import Report from "../components/emergency/Report";
import Header from "../components/common/Header";
import { getHistoryDetail } from "../api/history";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useAppSelector } from "../hooks/useRedux";
import { formatTime } from "../utils/dateUtils";
import { useParams } from "react-router-dom";
import { ko } from "date-fns/locale";

export default function HistoryDetailPage() {
  const { reportId } = useParams();
  const name = useAppSelector((state) => state.patient.name);

  const { data: historyDetail } = useQuery({
    queryKey: ["historyDetail", reportId],
    queryFn: () => getHistoryDetail(Number(reportId)),
  });

  if (!historyDetail) return null;

  const situationTime = new Date(historyDetail.situationTime);

  const formattedDate = `${format(situationTime, "yyyy / MM / dd", {
    locale: ko,
  })} (${format(situationTime, "EEE", { locale: ko })}) ${formatTime(
    situationTime
  )}`;

  return (
    <>
      <Header title="히스토리" />
      <div className="flex flex-col px-14 pt-6 gap-10 min-h-screen">
        <div className="flex flex-col gap-2 text-center">
          <div className="body-m-bold">{formattedDate}</div>
          <div className="body-m">{name}님의 낙상 기록</div>
        </div>
        <Report content={historyDetail.report} type="emergency" />
        <div className="flex flex-row items-center">
          <div className="text-darkgray title">조치 방법 &gt;</div>
          <div className="text-alert title flex justify-end">
            {historyDetail.actionType}
          </div>
        </div>
      </div>
    </>
  );
}
