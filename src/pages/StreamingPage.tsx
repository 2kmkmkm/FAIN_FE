import Header from "../components/common/Header";
import Streaming from "../components/streaming/Streaming";
import PatientBasicInfo from "../components/streaming/PatientBasicInfo";
import PatientMedicalcInfo from "../components/streaming/PatientMedicalInfo";
import PatientPhysicalInfo from "../components/streaming/PatientPhysicalInfo";

export default function StreamingPage() {
  return (
    <>
      <Header title="스트리밍" />
      <div className="px-14 py-7 flex flex-col gap-7">
        <PatientBasicInfo name="홍길동" birth="2024-05-10" />
        <Streaming />
        <PatientPhysicalInfo bloodtype="A+" height={180} weight={70} />
        <PatientMedicalcInfo
          disease="고혈압"
          allergy="꽃가루"
          medicine="혈압약"
        />
      </div>
    </>
  );
}
