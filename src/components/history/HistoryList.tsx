import HistoryMonthlyList from "./HistoryMonthlyList";

const list = [
  {
    reportId: 1,
    date: new Date("2025-05-14"),
    time: "23:00",
    action_type: "119 이송",
  },
  {
    reportId: 2,
    date: new Date("2025-05-15"),
    time: "23:00",
    action_type: "119 이송",
  },
  {
    reportId: 3,
    date: new Date("2025-05-16"),
    time: "23:00",
    action_type: "119 이송",
  },
  {
    reportId: 4,
    date: new Date("2025-05-17"),
    time: "23:00",
    action_type: "119 이송",
  },
  {
    reportId: 5,
    date: new Date("2025-04-10"),
    time: "22:30",
    action_type: "보호자 조치",
  },
  {
    reportId: 6,
    date: new Date("2025-04-12"),
    time: "21:45",
    action_type: "보호자 조치",
  },
  {
    reportId: 7,
    date: new Date("2025-03-05"),
    time: "20:00",
    action_type: "보호자 조치",
  },
  {
    reportId: 8,
    date: new Date("2025-03-18"),
    time: "19:50",
    action_type: "보호자 조치",
  },
  {
    reportId: 9,
    date: new Date("2025-02-25"),
    time: "18:30",
    action_type: "보호자 조치",
  },
  {
    reportId: 10,
    date: new Date("2025-02-28"),
    time: "17:45",
    action_type: "보호자 조치",
  },
];

export default function HistoryList() {
  if (!list || list.length === 0) {
    return (
      <div className="text-placeholder body-m flex justify-center items-center pt-5">
        히스토리가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <HistoryMonthlyList list={list} />
    </div>
  );
}
