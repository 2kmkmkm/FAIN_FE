import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { useRef } from "react";
import Input from "./Input";

type DatePickerProps = {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  placeholder: string;
};

export default function CustomDatePicker({
  selectedDate,
  handleDateChange,
  inputProps,
  placeholder,
}: DatePickerProps) {
  const ref = useRef<DatePicker>(null);

  const handleDateClick = () => {
    if (ref.current) ref.current.setFocus();
  };
  return (
    <DatePicker
      ref={ref}
      placeholderText={placeholder}
      dateFormat="yyyy-MM-dd"
      shouldCloseOnSelect
      selected={selectedDate}
      onInputClick={handleDateClick}
      onChange={handleDateChange}
      customInput={<Input {...inputProps} />}
    />
  );
}
