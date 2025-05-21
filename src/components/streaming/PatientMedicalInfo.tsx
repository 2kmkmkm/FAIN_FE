import Box from "../common/Box";

export default function PatientMedicalcInfo({
  disease,
  allergy,
  medicine,
}: {
  disease: string;
  allergy: string;
  medicine: string;
}) {
  return (
    <Box>
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-row">
          <div className="body-m text-darkgray w-24">질환</div>
          <div className="body-m justify-end flex">{disease}</div>
        </div>
        <div className="flex flex-row">
          <div className="body-m text-darkgray w-24">알러지</div>
          <div className="body-m justify-end flex">{allergy}</div>
        </div>
        <div className="flex flex-row">
          <div className="body-m text-darkgray w-24">복용약</div>
          <div className="body-m justify-end flex">{medicine}</div>
        </div>
      </div>
    </Box>
  );
}
