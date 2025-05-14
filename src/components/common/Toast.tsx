import { useEffect } from "react";

export default function Toast({
  setToast,
  text,
}: {
  setToast: (value: boolean) => void;
  text: string;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 text-white w-[60%] body-s px-8 py-2.5 rounded-[30px] justify-center items-center flex bg-[#808080]">
      {text}
    </div>
  );
}
