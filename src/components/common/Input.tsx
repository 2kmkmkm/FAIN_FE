import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isEdit?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isEdit = false, ...rest }: InputProps, ref) => {
    return (
      <div
        className={`w-full h-fit bg-[#F9F9F9] outline outline-[#EFEFEF] flex justify-start items-center ${
          isEdit
            ? "outline-1 outline-offset-[-1px] rounded-[5px] px-2 py-1.5 body-s"
            : "outline-2 outline-offset-[-2px] rounded-[20px] px-4 py-3.5 body-m"
        }`}
      >
        <input
          className="w-full h-full focus:outline-none bg-transparent"
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
