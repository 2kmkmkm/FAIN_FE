import hospital from "../../assets/hospital.svg";
import call_green from "../../assets/call_green.svg";
import Box from "../common/Box";

export default function Hospital({
  hospitalName,
  hospitalTel,
}: {
  hospitalName: string;
  hospitalTel: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 items-center px-2">
        <img src={hospital} className="w-5 h-5" />
        <div className="title">주요 병원</div>
      </div>
      <Box>
        <div className="flex flex-row justify-between">
          <div className="body-s w-fit">{hospitalName}</div>
          <div className="flex flex-row gap-2.5 w-fit items-center">
            <div className="body-s">{hospitalTel}</div>
            {hospitalTel && (
              <button
                onClick={() => (window.location.href = `tel: ${hospitalTel}`)}
                className="w-fit"
              >
                <img src={call_green} className="min-w-3" />
              </button>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}
