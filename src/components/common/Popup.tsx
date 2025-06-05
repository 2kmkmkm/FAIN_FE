import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Popup({
  contents,
  onClose,
  anchorRef,
}: {
  contents: string;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | HTMLImageElement | null>;
}) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    function updatePosition() {
      if (!anchorRef.current) return;

      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: window.innerWidth / 2,
      });
    }

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [anchorRef]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, anchorRef]);

  const formattedContents = contents.split("\n").map((line, index) => (
    <p key={index} className="whitespace-pre-wrap text-center">
      {line}
    </p>
  ));

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={popupRef}
      className="
        absolute
        w-[275px]
        mt-2.5
        py-4
        bg-[#F8F8F8]
        text-darkgray
        body-xs
        rounded-2xl
        shadow-[0px_2px_15px_0px_rgba(111,111,111,0.20)]
        overflow-hidden
        z-50
        transform
        -translate-x-1/2
      "
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {formattedContents}
    </div>,
    document.body
  );
}
