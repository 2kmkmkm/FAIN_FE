import { useState, useRef, useEffect } from "react";
import arrow_down from "../../assets/arrow_down.svg";

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
          : "outline-2 outline-offset-[-2px] px-4 py-3 rounded-[20px] body-m"
      } bg-white text-darkgray outline 
       outline-[#EFEFEF] w-full h-fit flex items-center justfiy-between overflow-hidden`}
    >
      <div className="flex">{category}</div>
      <img src={arrow_down} className="w-4" />
    </button>
  );
};

type DropdownMenuProps = {
  list: string[];
  isSmall: boolean;
  onSelect: (label: string) => void;
};

const DropdownMenu = ({ list, isSmall, onSelect }: DropdownMenuProps) => {
  return (
    <div
      className={`${
        isSmall ? "p-2 body-s" : "p-2.5 body-m"
      } w-full max-h-60 overflow-y-auto bg-white rounded-2xl shadow-[0px_2px_15px_0px_rgba(111,111,111,0.20)] flex flex-col gap-2.5`}
    >
      {list &&
        list.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => onSelect(item)}
              className="hover:bg-[#f4f4f4] h-fit px-2.5 py-5 rounded-2xl flex justify-start items-center overflow-hidden"
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
  onSelect: (label: string) => void;
  selectedValue: string;
};

export default function Dropdown({
  list,
  category,
  onSelect,
  selectedValue,
  isSmall = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (label: string) => {
    onSelect(label);
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="text-darkgray relative">
      <DropdownButton
        category={selectedValue || category}
        onClick={() => setIsOpen((prev) => !prev)}
        isSmall={isSmall}
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-10 w-full">
          <DropdownMenu list={list} onSelect={handleSelect} isSmall={isSmall} />
        </div>
      )}
    </div>
  );
}
