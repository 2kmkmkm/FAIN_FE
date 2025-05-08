type ButtonProps = {
  type?: "submit" | "button";
  onClick: () => void;
  label: string;
  isCancel?: boolean;
  isSmall?: boolean;
};

export default function Button({
  type = "button",
  onClick,
  label,
  isCancel = false,
  isSmall = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${isCancel ? "bg-white text-main" : "bg-main text-white"} ${
        isSmall
          ? "outline-1 outline-offset-[-1px] py-2 rounded-[10px] body-s"
          : "outline-2 outline-offset-[-2px] py-3.5 rounded-[20px] body-m"
      } outline outline-main w-full h-fit flex items-center justfiy-center overflow-hidden`}
    >
      <div>{label}</div>
    </button>
  );
}
