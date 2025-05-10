import ai from "../../assets/ai.svg";
import copy from "../../assets/copy.svg";
import arrow_down from "../../assets/arrow_down.svg";
import { useState } from "react";

export default function Report() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row px-2 justify-between items-center">
        <div className="flex flex-row gap-2.5 items-center">
          <img src={ai} className="w-5 h-5" />
          <div className="title">AI 리포트</div>
        </div>
        <button className="flex w-fit">
          <img src={copy} className="w-5" />
        </button>
      </div>
      <div className="relative px-7 pt-7 pb-6 bg-[#F8F8F8] rounded-[20px]">
        <div
          className={`leading-[30px] body-s transition-all duration-300 mb-4 ${
            isExpanded ? "" : "line-clamp-5"
          }`}
        >
          홍길동님의 기저질환과 여러 상황을 종합해 보았을 때, 심혈관 이상으로
          인한 급작스러운 의식 저하 가능성이 있습니다. 환자 상태를 즉시
          확인해주세요. 홍길동님의 기저질환과 여러 상황을 종합해 보았을 때,
          심혈관 이상으로 인한 급작스러운 의식 저하 가능성이 있습니다. 환자
          상태를 즉시 확인해주세요.
        </div>
        <button
          className={`flex justify-center ${
            isExpanded ? "transfrom scale-y-[-1]" : ""
          }`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <img src={arrow_down} className="w-4" />
        </button>
      </div>
    </div>
  );
}
