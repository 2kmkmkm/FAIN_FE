import CustomDatePicker from "../common/CustomDatePicker";
import Input from "../common/Input";
import search from "../../assets/search.svg";
import CustomPostcode from "../common/CustomPostcode";
import type { DaumPostcodeData } from "../common/CustomPostcode";
import type { PatientBasicFormProps } from "../../type/userType";
import { formatDateToString, parseStringToDate } from "../../utils/dateUtils";
import { useCallback, useEffect, useState } from "react";
import React from "react";

function PatientBasicForm({
  basic,
  handleBasicChange,
  handleDateChange,
}: PatientBasicFormProps) {
  const [addressInfo, setAddressInfo] = useState({
    zoneCode: "",
    roadAddress: "",
    detailAddress: "",
  });

  const [showPostcode, setShowPostcode] = useState(false);

  useEffect(() => {
    const formattedAddress =
      `(${addressInfo.zoneCode}) ${addressInfo.roadAddress} ${addressInfo.detailAddress}`.trim();
    handleBasicChange({
      target: {
        name: "address",
        value: formattedAddress,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [addressInfo, handleBasicChange]);

  const handleComplete = useCallback((data: DaumPostcodeData) => {
    setAddressInfo((prev) => ({
      ...prev,
      zoneCode: data.zonecode,
      roadAddress: data.roadAddress,
    }));
    setShowPostcode(false);
  }, []);

  const handleZoneCodeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddressInfo((prev) => ({
        ...prev,
        zoneCode: value,
      }));
    },
    []
  );

  const handleRoadAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddressInfo((prev) => ({
        ...prev,
        roadAddress: value,
      }));
    },
    []
  );

  const handleDetailAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddressInfo((prev) => ({
        ...prev,
        detailAddress: value,
      }));
    },
    []
  );

  const handleDateChangeAndClose = useCallback(
    (date: Date | null) => {
      handleDateChange(date);
      setShowPostcode(false);
    },
    [handleDateChange]
  );

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
        <div className="relative">
          <CustomDatePicker
            placeholder="생년월일"
            selectedDate={parseStringToDate(basic.birth)}
            handleDateChange={handleDateChangeAndClose}
            inputProps={{
              name: "birth",
              value: formatDateToString(parseStringToDate(basic.birth)),
            }}
          />
        </div>
        <div className="flex flex-row gap-2 h-fit">
          <Input
            name="zone_code"
            placeholder="우편번호"
            type="number"
            value={addressInfo.zoneCode}
            onChange={handleZoneCodeChange}
          />
          <button
            type="button"
            className="bg-main text-white body-s w-14 px-1.5 rounded-[10px] flex justify-center items-center"
            onClick={() => setShowPostcode(true)}
          >
            <img src={search} className="w-7" />
          </button>
          {showPostcode && <CustomPostcode onComplete={handleComplete} />}
        </div>
        <Input
          name="road_address"
          placeholder="도로명 주소"
          value={addressInfo.roadAddress}
          onChange={handleRoadAddressChange}
        />
        <Input
          name="detail_address"
          placeholder="상세 주소"
          value={addressInfo.detailAddress}
          onChange={handleDetailAddressChange}
        />
      </div>
    </div>
  );
}

export default React.memo(PatientBasicForm);
