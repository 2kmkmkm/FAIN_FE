import { useEffect, useRef } from "react";

export default function Popup({
  contents,
  onClose,
}: {
  contents: string;
  onClose: () => void;
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const formattedContents = contents.split("\n").map((line, index) => (
    <p key={index} className="whitespace-pre-wrap m-0">
      {line}
    </p>
  ));

  return (
    <div
      ref={popupRef}
      className="absolute w-72 mt-2 top-full left-1/2 transform -translate-x-1/2 px-5 py-4 text-darkgray body-s bg-[#F8F8F8] rounded-xl shadow-[0px_2px_15px_0px_rgba(111,111,111,0.20)] overflow-hidden"
    >
      {formattedContents}
    </div>
  );
}
