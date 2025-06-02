import HistoryMonthlyList from "./HistoryMonthlyList";
import { getHistoryList } from "../../api/history";
import { useQuery } from "@tanstack/react-query";

export default function HistoryList() {
  const { data: historyList } = useQuery({
    queryKey: ["history"],
    queryFn: () => getHistoryList(),
  });

  if (!Array.isArray(historyList) || historyList.length === 0) {
    return (
      <div className="text-placeholder body-m flex justify-center items-center pt-5">
        히스토리가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <HistoryMonthlyList {...historyList} />
    </div>
  );
}
