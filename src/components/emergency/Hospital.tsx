import hospital from "../../assets/hospital.svg";
import call_green from "../../assets/call_green.svg";
import Box from "../common/Box";

export default function Hospital() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 items-center px-2">
        <img src={hospital} className="w-5 h-5" />
        <div className="title">주요 병원</div>
      </div>
      <Box>
        <div className="flex flex-row justify-between">
          <div className="body-s w-fit">광주 병원</div>
          <div className="flex flex-row gap-1.5 w-fit">
            <div className="body-s">062-000-0000</div>
            <button onClick={() => (window.location.href = "tel: 01029116480")}>
              <img src={call_green} className="w-3" />
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}
