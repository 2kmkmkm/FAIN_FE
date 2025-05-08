type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isEdit?: boolean;
};

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  isEdit = false,
}: InputProps) {
  return (
    <div
      className={`w-full h-fit   bg-[#F9F9F9] outline outline-[#EFEFEF] flex justify-start items-center overflow-hidde ${
        isEdit
          ? "outline-1 outline-offset-[-1px] roudned-[5px] px-2 py-1.5 body-s"
          : "outline-2 outline-offset-[-2px] rounded-[20px] p-3.5 body-m"
      }`}
    >
      <input
        className="w-full h-full focus:outline-none bg-transparent"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
