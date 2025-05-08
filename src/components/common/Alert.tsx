import type { ReactNode } from "react";

export default function Alert({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} text-alert body-s flex`}>{children}</div>
  );
}
