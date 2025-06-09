import arrow_calendar from "../assets/arrow_calendar.svg";
import Summary from "../components/analysis/Summary";
import Graph from "../components/analysis/Graph";
import Report from "../components/emergency/Report";
import SideHeader from "../components/common/SideHeader";
import { useState } from "react";
import { getSummary, getGraph, getReport } from "../api/analysis";
import { useQuery } from "@tanstack/react-query";

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

  const { data: summary } = useQuery({
    queryKey: ["summary", selectedYear, selectedMonth],
    queryFn: () => getSummary(selectedYear, selectedMonth),
  });

  const { data: graphData } = useQuery({
    queryKey: ["graph", selectedYear, selectedMonth],
    queryFn: () => getGraph(selectedYear, selectedMonth),
  });

  const { data: report } = useQuery({
    queryKey: ["report", selectedYear, selectedMonth],
    queryFn: () => getReport(selectedYear, selectedMonth),
  });

  return (
    <>
      <SideHeader title="분석" />
      <div className="px-10 flex flex-col gap-8 pt-3">
        <div className="flex flex-row justify-center items-center gap-6">
          <button className="w-3" onClick={() => handleMonthChange("prev")}>
            <img src={arrow_calendar} className="w-1.5" />
          </button>
          <div className="w-fit heading-s">
            {selectedYear}년 {selectedMonth}월
          </div>
          <button className="w-3" onClick={() => handleMonthChange("next")}>
            <img
              src={arrow_calendar}
              className="w-1.5 transform scale-x-[-1]"
            />
          </button>
        </div>
        {summary && graphData && report ? (
          <>
            <Summary
              fall={summary?.fallCount}
              hospital={summary?.hcount}
              guardian={summary?.pcount}
            />
            <Graph graphData={graphData} />
            <Report content={report?.aiComment ?? ""} type="analysis" />
          </>
        ) : (
          <div className="pt-5 body-m text-placeholder flex justify-center marker:text-center">
            해당 월에 낙상 데이터가 없습니다.
          </div>
        )}
      </div>
    </>
  );
}
