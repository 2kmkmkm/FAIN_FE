import type { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col p-7 bg-[#F8F8F8] rounded-[20px] justify-center items-start">
      {children}
    </div>
  );
}
