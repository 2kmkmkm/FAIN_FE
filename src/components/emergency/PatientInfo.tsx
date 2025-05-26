import person from "../../assets/person.svg";
import copy from "../../assets/copy.svg";
import PatientPhysicalInfo from "../streaming/PatientPhysicalInfo";
import PatientMedicalcInfo from "../streaming/PatientMedicalInfo";
import type { EmergencyProps } from "../../type/reportType";

export default function PatientInfo({ ...rest }: EmergencyProps) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row px-2 justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={person} className="w-5 h-5" />
          <div className="title">환자 정보</div>
        </div>
        <button className="flex w-fit">
          <img src={copy} className="w-5" />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <PatientPhysicalInfo
          bloodType={rest.bloodType}
          height={rest.height}
          weight={rest.weight}
        />
        <PatientMedicalcInfo
          disease={rest.disease}
          allergic={rest.allergic}
          medicine={rest.medicine}
        />
      </div>
    </div>
  );
}
