import arrow_calendar from "../assets/arrow_calendar.svg";
import Summary from "../components/analysis/Summary";
import Graph from "../components/analysis/Graph";
import Report from "../components/emergency/Report";
import { useEffect, useState } from "react";
import { getSummary, getGraph, getReport } from "../api/analysis";
import SideHeader from "../components/common/SideHeader";

export default function AnlaysisPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);

  const [fallCount, setFallCount] = useState<number>(0);
  const [hospitalCount, setHospitalCount] = useState<number>(0);
  const [guardianCount, setGuardianCount] = useState<number>(0);

  const [graphData, setGraphData] = useState();

  const [report, setReport] = useState<string>("");

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

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await getSummary(selectedYear, selectedMonth);
        setFallCount(res.data.fall_count);
        setHospitalCount(res.data.h_count);
        setGuardianCount(res.data.p_count);
      } catch (error) {
        console.error("getSummary Error: ", error);
      }
    };

    fetchSummary();
  });

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await getReport(selectedYear, selectedMonth);
        setReport(res.data);
      } catch (error) {
        console.error("getReport Error: ", error);
      }
    };

    fetchReport();
  });

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const res = await getGraph(selectedYear, selectedMonth);
        setGraphData(res);
      } catch (error) {
        console.error("getGraph Error: ", error);
      }
    };

    fetchGraph();
  });

  return (
    <>
      <SideHeader title="분석" />
      <div className="px-14 flex flex-col gap-7 pt-3 min-h-screen">
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
        <Summary
          fall={fallCount}
          hospital={hospitalCount}
          guardian={guardianCount}
        />
        <Graph graphData={graphData} />
        <Report content={report} />
      </div>
    </>
  );
}
