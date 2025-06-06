import ai from "../../assets/ai.svg";
import copy from "../../assets/copy.svg";
import arrow_down from "../../assets/arrow_down.svg";
import Toast from "../common/Toast";
import { copyToClipboard } from "../../utils/copyUtils";
import { useState, useRef, useEffect } from "react";

export default function Report({
  content,
  type,
}: {
  content: string;
  type: "analysis" | "emergency";
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [monthly, setMonthly] = useState<string>("");

  const visibleRef = useRef<HTMLParagraphElement>(null);
  const hiddenRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const cleanReport = content.replace(/^"|"$/g, "");

    if (type === "emergency") {
      const [analysisPart, actionPart] = cleanReport.split("\\n");
      const analysisResult = analysisPart.replace("[분석] ", "").trim();
      const actionResult = actionPart.replace("[조치] ", "").trim();

      setAnalysis(analysisResult);
      setAction(actionResult);
    } else if (type === "analysis") {
      const monthlyResult = cleanReport.split("\\n").slice(1).join(" ").trim();
      setMonthly(monthlyResult);
    }
  }, [content, type]);

  const handleCopy = async () => {
    const success = await copyToClipboard(content);
    if (success) {
      setToast(true);
    } else {
      setToast(false);
    }
  };

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
      } else {
        setIsTruncated(false);
      }
    };

    requestAnimationFrame(checkLines);
    return () => {};
  }, [content, isExpanded]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row px-2 justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={ai} className="w-5 h-5" />
          <div className="title">AI 리포트</div>
        </div>
        <button className="flex w-fit" onClick={handleCopy}>
          <img src={copy} className="w-5" />
        </button>
      </div>
      <div className="relative body-p px-7 pt-7 pb-7 bg-[#F8F8F8] rounded-[20px]">
        <div
          ref={visibleRef}
          className={`transition-all duration-100 ${
            !isExpanded && isTruncated ? "line-clamp-5" : ""
          }
          }`}
        >
          {type === "emergency" ? (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                <div className="body-m-bold">[ 분석 ]</div>
                <div className="body-s text-darkgray">{analysis}</div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="body-m-bold">[ 조치 ]</div>
                <div className="body-s text-darkgray">{action}</div>
              </div>
            </div>
          ) : (
            <div className="body-p">{monthly}</div>
          )}
        </div>

        {isTruncated && (
          <button
            className="flex justify-center w-full pt-3.5"
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
      {toast && <Toast setToast={setToast} text="복사가 완료되었습니다" />}
    </div>
  );
}
