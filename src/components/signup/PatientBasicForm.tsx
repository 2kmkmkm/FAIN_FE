import CustomDatePicker from "../common/CustomDatePicker";
import Input from "../common/Input";
import search from "../../assets/search.svg";
import type { PatientBasicFormProps } from "../../type/userType";
import { formatDateToString, parseStringToDate } from "../../utils/dateUtils";
import { useEffect, useState, type ChangeEvent } from "react";

export default function PatientBasicForm({
  basic,
  handleBasicChange,
  handleDateChange,
}: PatientBasicFormProps) {
  const handleDateChangeAndClose = (date: Date | null) => {
    handleDateChange(date);
    handleBasicChange({
      target: {
        name: "birth",
        value: formatDateToString(date),
      },
    } as ChangeEvent<HTMLInputElement>);
  };

  const [zoneCode, setZoneCode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const formatted = `(${zoneCode}) ${roadAddress} ${detailAddress}`;
    setAddress(formatted.trim());
  }, [zoneCode, roadAddress, detailAddress]);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="title pl-2">환자 기본 정보</div>
      <div className="flex flex-col gap-2.5">
        <Input
          name="name"
          placeholder="환자 이름"
          value={basic.name}
          onChange={handleBasicChange}
        />
        <div className="relative ">
          <CustomDatePicker
            placeholder="생년월일"
            selectedDate={parseStringToDate(basic.birth)}
            handleDateChange={handleDateChangeAndClose}
            inputProps={{
              name: "birth",
              value: formatDateToString(parseStringToDate(basic.birth)),
              readOnly: true,
            }}
          />
        </div>
        <div className="flex flex-row gap-2 h-full">
          <Input
            name="zone_code"
            placeholder="우편번호"
            type="number"
            value={zoneCode}
            onChange={(e) => setZoneCode(e.target.value)}
          />
          <button
            type="button"
            className="bg-main text-white body-s w-14 px-1.5 rounded-[10px] flex justify-center items-center"
          >
            <img src={search} className="w-7" />
          </button>
        </div>
        <Input
          name="road_address"
          placeholder="주소"
          value={roadAddress}
          onChange={(e) => setRoadAddress(e.target.value)}
        />
        <Input
          name="detail_address"
          placeholder="상세 주소"
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
        />
      </div>
    </div>
  );
}
