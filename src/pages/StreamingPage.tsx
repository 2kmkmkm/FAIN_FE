import Streaming from "../components/streaming/Streaming";
import PatientBasicInfo from "../components/streaming/PatientBasicInfo";
import PatientMedicalInfo from "../components/streaming/PatientMedicalInfo";
import PatientPhysicalInfo from "../components/streaming/PatientPhysicalInfo";
import { useAppSelector } from "../hooks/useRedux";
import type { RootState } from "../app/store";

export default function StreamingPage() {
  const patient = useAppSelector((state: RootState) => state.patient);

  return (
    <div className="px-14 pt-7 flex flex-col gap-7">
      <PatientBasicInfo name={patient.name} birth={patient.birth} />
      <Streaming />
      <PatientPhysicalInfo
        bloodType={patient.bloodType}
        height={patient.height}
        weight={patient.weight}
      />
      <PatientMedicalInfo
        disease={patient.disease}
        allergic={patient.allergic}
        medicine={patient.medicine}
      />
    </div>
  );
}
