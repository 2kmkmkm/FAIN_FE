import ai from "../../assets/ai.svg";
import copy from "../../assets/copy.svg";
import arrow_down from "../../assets/arrow_down.svg";
import { useState, useRef, useEffect } from "react";

export default function Report({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);

  const visibleRef = useRef<HTMLParagraphElement>(null);
  const hiddenRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkLines = () => {
      if (!visibleRef.current || !hiddenRef.current) return;

      const lineHeight = parseFloat(
        getComputedStyle(visibleRef.current).lineHeight
      );
      const fullHeight = hiddenRef.current.clientHeight;
      const lines = fullHeight / lineHeight;

      if (lines > 5) {
        setIsTruncated(true);
      }
    };

    // 렌더 이후 줄 수 정확히 측정
    const timeout = setTimeout(checkLines, 0);

    return () => clearTimeout(timeout);
  }, [content]);

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
      <div className="relative body-p  px-7 pt-7 pb-6 bg-[#F8F8F8] rounded-[20px]">
        <p
          ref={visibleRef}
          className={`transition-all duration-100 mb-4 ${
            !isExpanded && isTruncated ? "line-clamp-5" : ""
          }
          }`}
        >
          {content}
        </p>

        {isTruncated && (
          <button
            className="flex justify-center w-full"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <img
              src={arrow_down}
              className={`w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}

        <p
          ref={hiddenRef}
          className="body-s leading-7 absolute invisible z-[-1] w-full"
        >
          {content}
        </p>
      </div>
    </div>
  );
}
