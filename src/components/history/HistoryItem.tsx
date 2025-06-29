import caution_pink from "../../assets/caution_pink.svg";
import type { HistoryProps } from "../../type/reportType";
import { useAppSelector } from "../../hooks/useRedux";
import { formatDay } from "../../utils/dateUtils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatTime } from "../../utils/dateUtils";

export default function HistoryItem({ ...item }: HistoryProps) {
  const nav = useNavigate();
  const name = useAppSelector((state) => state.patient.name);

  const [action, setAction] = useState<string>("");

  useEffect(() => {
    if (item.actionType === "_119") setAction("119 이송");
    else if (item.actionType === "FAMILY") setAction("보호자 조치");
    else setAction("");
  }, [item.actionType]);

  const formattedTime = new Date(item.situationTime);

  return (
    <button
      className="flex flex-col rounded-[20px] justify-center items-center bg-[#FBFBFB] hover:bg-[#F3F3F3] active:bg-[#F3F3F3]"
      onClick={() => nav(`/history/detail/${item.reportId}`)}
    >
      <div className="flex items-center gap-3 px-3 py-4">
        <img src={caution_pink} className="w-5" />
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <div className="body-s-bold w-fit">
                {formatDay(new Date(item.situationTime))}
              </div>
              <div className="body-xs text-darkgray w-fit">
                {formatTime(formattedTime)}
              </div>
            </div>
            <div className="body-xs text-placeholder flex justify-end pr-2">
              {action}
            </div>
          </div>
          <div className="w-full truncate whitespace-nowrap text-start items-start overflow-hidden body-s text-darkgray">
            {name}님의 낙상이 감지되었습니다.
          </div>
        </div>
      </div>
      <div className="h-px w-11/12 bg-[#EFEFEF]" />
    </button>
  );
}
