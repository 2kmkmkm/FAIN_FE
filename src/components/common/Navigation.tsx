import streaming from "../../assets/streaming.svg";
import analysis from "../../assets/analysis.svg";
import history from "../../assets/history.svg";
import mypage from "../../assets/mypage.svg";
import streaming_fill from "../../assets/streaming_fill.svg";
import analysis_fill from "../../assets/analysis_fill.svg";
import history_fill from "../../assets/history_fill.svg";
import mypage_fill from "../../assets/mypage_fill.svg";
import { useState } from "react";

const list = [
  { label: "스트리밍", src: streaming, selectedSrc: streaming_fill },
  { label: "분석", src: analysis, selectedSrc: analysis_fill },
  { label: "히스토리", src: history, selectedSrc: history_fill },
  { label: "마이페이지", src: mypage, selectedSrc: mypage_fill },
];

export default function Navigation() {
  const [selectedMenu, setSelectedMenu] = useState<string>("스트리밍");

  return (
    <div className="w-full h-20 bg-white shadow-[0px_-4px_25px_0px_rgba(188,188,188,0.25)] flex justify-center items-center gap-12">
      {list.map((item) => {
        const isSelected = item.label === selectedMenu;
        return (
          <button
            key={item.label}
            className="flex flex-col justify-start items-center gap-1.5"
            onClick={() => setSelectedMenu(item.label)}
          >
            <img
              src={isSelected ? item.selectedSrc : item.src}
              className="w-7 h-7"
            />
            <div
              className={`${
                isSelected ? "text-main" : "text-placeholder"
              } body-s-bold`}
            >
              {item.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}
