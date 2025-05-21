import Header from "../components/common/Header";
import HistoryList from "../components/history/HistoryList";

export default function HistoryPage() {
  return (
    <>
      <Header title="히스토리" />
      <div className="flex flex-col py-8 px-11 min-h-screen">
        <HistoryList />
      </div>
    </>
  );
}
