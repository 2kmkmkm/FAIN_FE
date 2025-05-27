import { useEffect, useState } from "react";
import HistoryMonthlyList from "./HistoryMonthlyList";
import { getHistoryList } from "../../api/history";

export default function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const fetchHistoryList = async () => {
      try {
        const res = await getHistoryList();
        setHistoryList(res);
      } catch (error) {
        console.error("fetchHistoryList Error: ", error);
      }
    };

    fetchHistoryList();
  }, []);

  if (!historyList || historyList.length === 0) {
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
