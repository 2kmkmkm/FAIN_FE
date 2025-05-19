import arrow_calendar from "../assets/arrow_calendar.svg";
import Header from "../components/common/Header";
import Summary from "../components/analysis/Summary";
import Graph from "../components/analysis/Graph";
import Report from "../components/emergency/Report";
import { useState } from "react";

export default function AnlaysisPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);

  const handleMonthChange = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (selectedMonth === 1) {
        setSelectedMonth(12);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else if (direction === "next") {
      if (selectedMonth === 12) {
        setSelectedMonth(1);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
  };
  return (
    <>
      <Header title="분석" />
      <div className="px-14 flex flex-col gap-7 pt-7 pb-10">
        <div className="flex flex-row justify-center items-center gap-6">
          <button className="w-3" onClick={() => handleMonthChange("prev")}>
            <img src={arrow_calendar} className="w-1.5" />
          </button>
          <div className="w-fit heading-s text-darkgray">
            {selectedYear}년 {selectedMonth}월
          </div>
          <button className="w-3" onClick={() => handleMonthChange("next")}>
            <img
              src={arrow_calendar}
              className="w-1.5 transform scale-x-[-1]"
            />
          </button>
        </div>
        <Summary fall={1} ambulance={1} guardian={1} />
        <Graph />
        <Report
          content="홍길동님의 기저질환과 여러 상황을 종합해 보았을 때, 심혈관 이상으로
          인한 급작스러운 의식 저하 가능성이 있습니다. 환자 상태를 즉시
          확인해주세요. "
        />
      </div>
    </>
  );
}
