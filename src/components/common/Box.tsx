import type { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col p-6 bg-[#F5F5F5] rounded-[20px] justify-center items-start">
      {children}
    </div>
  );
}
