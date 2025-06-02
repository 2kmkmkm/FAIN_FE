import SideHeader from "../components/common/SideHeader";
import HistoryList from "../components/history/HistoryList";

export default function HistoryPage() {
  return (
    <>
      <SideHeader title="히스토리" />
      <div className="flex flex-col pt-3 px-11">
        <HistoryList />
      </div>
    </>
  );
}
