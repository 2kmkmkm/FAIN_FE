export default function PatientPhysicalInfo({
  bloodtype,
  height,
  weight,
}: {
  bloodtype: string;
  height: number;
  weight: number;
}) {
  return (
    <div className="flex justify-between items-center text-center gap-3">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="body-m">혈액형</div>
        <div className="body-m text-darkgray">{bloodtype}형</div>
      </div>
      <div className="w-px h-11 bg-[#D9D9D9]"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="body-m">신장</div>
        <div className="body-m text-darkgray">{height}cm</div>
      </div>
      <div className="w-px h-11 bg-[#D9D9D9]"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="body-m">체중</div>
        <div className="body-m text-darkgray">{weight}kg</div>
      </div>
    </div>
  );
}
