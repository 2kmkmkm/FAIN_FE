import pin from "../../assets/pin.svg";

export default function Summary({
  fall,
  ambulance,
  guardian,
}: {
  fall: number;
  ambulance: number;
  guardian: number;
}) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row px-2 justify-between items-center">
        <div className="flex flex-row gap-2.5 items-center">
          <img src={pin} className="w-5 h-5" />
          <div className="title">월간 요약</div>
        </div>
      </div>
      <div className="flex justify-between items-center text-center gap-3.5">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="body-m-bold">낙상</div>
          <div className="body-m text-darkgray">{fall}회</div>
        </div>
        <div className="w-px h-12 bg-[#D9D9D9]"></div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="body-m-bold">병원 이송</div>
          <div className="body-m text-darkgray">{ambulance}회</div>
        </div>
        <div className="w-px h-12 bg-[#D9D9D9]"></div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="body-m-bold">자체 조치</div>
          <div className="body-m text-darkgray">{guardian}회</div>
        </div>
      </div>
    </div>
  );
}
