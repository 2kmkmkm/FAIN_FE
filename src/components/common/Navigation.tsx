import { Link } from "react-router-dom";
import streaming from "../../assets/streaming.svg";
import analysis from "../../assets/analysis.svg";
import history from "../../assets/history.svg";
import mypage from "../../assets/mypage.svg";
import streaming_fill from "../../assets/streaming_fill.svg";
import analysis_fill from "../../assets/analysis_fill.svg";
import history_fill from "../../assets/history_fill.svg";
import mypage_fill from "../../assets/mypage_fill.svg";

const NavigationList = [
  {
    label: "스트리밍",
    nav: "/streaming",
    src: streaming,
    selectedSrc: streaming_fill,
  },
  {
    label: "분석",
    nav: "/analysis",
    src: analysis,
    selectedSrc: analysis_fill,
  },
  {
    label: "히스토리",
    nav: "/history",
    src: history,
    selectedSrc: history_fill,
  },
  {
    label: "마이페이지",
    nav: "/my",
    src: mypage,
    selectedSrc: mypage_fill,
  },
];

export default function Navigation({ currentPath }: { currentPath: string }) {
  return (
    <div className="fixed left-0 bottom-0 w-full px-5 h-[75px] bg-back shadow-[0px_-4px_25px_0px_rgba(188,188,188,0.25)] flex justify-center items-center">
      {NavigationList.map((item) => {
        const isSelected = currentPath.startsWith(item.nav);
        return (
          <Link
            key={item.label}
            to={item.nav}
            className="flex flex-col text-center justify-center items-center gap-1.5"
          >
            <img
              src={isSelected ? item.selectedSrc : item.src}
              className="w-6 h-6"
            />
            <div
              className={`${
                isSelected ? "text-main" : "text-placeholder"
              } body-xs-bold`}
            >
              {item.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
