import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <div className="bg-white w-full h-screen px-12">{children}</div>;
}
