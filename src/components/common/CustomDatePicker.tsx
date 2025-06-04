import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import Input from "./Input";

type DatePickerProps = {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  placeholder: string;
  isEdit?: boolean;
};

export default function CustomDatePicker({
  selectedDate,
  handleDateChange,
  inputProps,
  placeholder,
  isEdit = false,
}: DatePickerProps) {
  return (
    <DatePicker
      popperPlacement="bottom"
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      customInput={<Input {...inputProps} isEdit={isEdit} />}
      placeholderText={placeholder}
      shouldCloseOnSelect
      renderCustomHeader={({ date, changeYear, changeMonth }) => {
        const years = Array.from(
          { length: 100 },
          (_, i) => new Date().getFullYear() - i
        );
        const months = [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ];

        return (
          <div
            className="flex justify-between px-4 py-2"
            style={{ gap: "8px", alignItems: "center" }}
          >
            <select
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(Number(value))}
              className="p-1 border rounded"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>

            <select
              value={date.getMonth()}
              onChange={({ target: { value } }) => changeMonth(Number(value))}
              className="p-1 border rounded"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        );
      }}
    />
  );
}
