import { useState } from "react";
import arrow from "../../assets/arrow.svg";

type DropdownButtonProps = {
  category: string;
  onClick: () => void;
  isSmall?: boolean;
};

const DropdownButton = ({
  category,
  onClick,
  isSmall,
}: DropdownButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isSmall
          ? "outline-1 outline-offset-[-1px] px-2 py-1.5 rounded-[5px] body-s"
          : "outline-2 outline-offset-[-2px] p-3.5 rounded-[20px] body-m"
      } bg-white text-darkgray outline 
       outline-[#EFEFEF] w-full h-fit flex items-center justfiy-between overflow-hidden`}
    >
      <div className="flex">{category}</div>
      <img src={arrow} className="w-4" />
    </button>
  );
};

type DropdownMenuProps = {
  list: string[];
  onSelect: (label: string) => void;
};

const DropdownMenu = ({ list, onSelect }: DropdownMenuProps) => {
  return (
    <div className="w-full h-fit p-2.5 body-m bg-white rounded-2xl shadow-[0px_2px_15px_0px_rgba(111,111,111,0.20)] flex flex-col gap-2.5 z-10">
      {list &&
        list.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => onSelect(item)}
              className="hover:bg-[#F6F6F6] px-3 py-1.5 rounded-2xl flex justify-start items-center overflow-hidden"
            >
              {item}
            </button>
          );
        })}
    </div>
  );
};

type DropdownProps = {
  list: string[];
  category: string;
  isSmall?: boolean;
};

export default function Dropdown({
  list,
  category,
  isSmall = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(category);

  const handleSelect = (label: string) => {
    setSelectedValue(label);
    setIsOpen(false);
  };

  return (
    <div className="text-darkgray">
      <DropdownButton
        category={selectedValue}
        onClick={() => setIsOpen((prev) => !prev)}
        isSmall={isSmall}
      />
      {isOpen && <DropdownMenu list={list} onSelect={handleSelect} />}
    </div>
  );
}
