import HistoryItem from "./HistoryItem";
import type { HistoryProps } from "../../type/reportType";

export default function HistoryMonthlyList({ list }: { list: HistoryProps[] }) {
  const groupByMonth = (list: HistoryProps[]) => {
    return list.reduce((acc, item) => {
      const monthKey = `${item.date.getFullYear()}년 ${
        item.date.getMonth() + 1
      }월`;
      if (!acc[monthKey]) acc[monthKey] = [];
      acc[monthKey].push(item);
      return acc;
    }, {} as Record<string, HistoryProps[]>);
  };

  const grouped = groupByMonth(list);

  const sortedMonths = Object.keys(grouped).sort((a, b) => {
    const [yearA, monthA] = a.split("년 ").map(Number);
    const [yearB, monthB] = b.split("년 ").map(Number);
    if (yearA !== yearB) return yearB - yearA;
    return monthB - monthA;
  });

  return (
    <>
      {sortedMonths.map((month) => (
        <div key={month} className="flex flex-col gap-3">
          <div className="heading-s">{month}</div>
          <div className="flex flex-col pb-5">
            {grouped[month]
              .slice()
              .reverse()
              .map((item) => (
                <HistoryItem key={item.reportId} {...item} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
