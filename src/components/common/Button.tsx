import type { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  label: string;
  isCancel?: boolean;
  isSmall?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label,
  isCancel = false,
  isSmall = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${
        isCancel
          ? "bg-white text-main hover:bg-bg-[#e9e9e9] active:bg-[#e9e9e9]"
          : "bg-main text-white hover:outline-pink hover:bg-pink active:bg-pink"
      } ${
        isSmall
          ? "outline-1 outline-offset-[-1px] py-2 rounded-[13px] body-s"
          : "outline-2 outline-offset-[-2px] py-3.5 rounded-[20px] body-m"
      } outline outline-main w-full h-fit flex items-center justfiy-center overflow-hidden`}
    >
      <div>{label}</div>
    </button>
  );
}
