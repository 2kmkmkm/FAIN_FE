import HistoryItem from "./HistoryItem";

const list = [
  {
    reportId: 1,
    date: new Date("2025-05-14"),
    time: "23:00",
    action_type: "119 이송",
    contents: "이경민님의 낙상이 감지되었습니다.",
  },
  {
    reportId: 2,
    date: new Date("2025-05-15"),
    time: "23:00",
    action_type: "119 이송",
    contents: "이경민님의 낙상이 감지되었습니다.",
  },
  {
    reportId: 3,
    date: new Date("2025-05-16"),
    time: "23:00",
    action_type: "119 이송",
    contents: "이경민님의 낙상이 감지되었습니다.",
  },
  {
    reportId: 4,
    date: new Date("2025-05-17"),
    time: "23:00",
    action_type: "119 이송",
    contents: "이경민님의 낙상이 감지되었습니다.",
  },
];

export default function HistoryList() {
  if (!list || list.length === 0) {
    return (
      <div className="text-placeholder body-m flex justify-center items-center py-5">
        히스토리가 없습니다.
      </div>
    );
  }

  const reversedList = [...list].reverse();

  return (
    <div className="flex flex-col gap-3 pb-10">
      <div className="heading-s">2025년 3월</div>
      <div>
        {reversedList.map((item) => (
          <HistoryItem key={item.reportId} {...item} />
        ))}
      </div>
    </div>
  );
}
