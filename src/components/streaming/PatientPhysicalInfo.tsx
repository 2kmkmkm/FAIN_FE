import type { PatientPhysicalInfo } from "../../type/userType";

export default function PatientPhysicalInfo({
  bloodType,
  height,
  weight,
}: PatientPhysicalInfo) {
  return (
    <div className="flex justify-between items-center text-center gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="body-m-bold">혈액형</div>
        <div className="body-m text-darkgray">{bloodType}형</div>
      </div>
      <div className="w-px h-12 bg-[#D9D9D9]"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="body-m-bold">신장</div>
        <div className="body-m text-darkgray">{height}cm</div>
      </div>
      <div className="w-px h-12 bg-[#D9D9D9]"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="body-m-bold">체중</div>
        <div className="body-m text-darkgray">{weight}kg</div>
      </div>
    </div>
  );
}
