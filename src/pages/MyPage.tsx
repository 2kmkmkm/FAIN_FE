import Header from "../components/common/Header";
import Box from "../components/common/Box";
import InfoBox from "../components/mypage/InfoBox";
import {
  GUARDIAN_INFO_CONFIG,
  PATIENT_INFO_CONFIG,
  UNIT_MAP,
} from "../type/userType";
import { useNavigate } from "react-router-dom";

const guardianData = {
  guardianId: "2kmkmkm",
  guardianName: "이경민",
  guardianPhone: "010-2911-6480",
};

const patientData = {
  name: "홍길동",
  birth: "2024-05-24",
  address: "광주광역시 북구 용봉로 77",
  height: 180,
  weight: 70,
  bloodType: "A+",
  disease: "고혈압",
  allergy: "꽃가루",
  medication: "혈압약",
  mainHospital: "전남대병원",
};

export default function MyPage() {
  const nav = useNavigate();

  return (
    <>
      <Header title="마이페이지" />
      <div className="flex flex-col px-12 gap-5 pt-8 pb-10">
        <Box>
          <InfoBox
            title="보호자 정보"
            config={GUARDIAN_INFO_CONFIG}
            data={guardianData}
            editable
            onEdit={() => nav("/edit/guardian")}
          />
        </Box>
        <Box>
          <InfoBox
            title="환자 정보"
            config={PATIENT_INFO_CONFIG}
            data={patientData}
            unitMap={UNIT_MAP}
            editable
            onEdit={() => nav("/edit/patient")}
          />
        </Box>
        <button className="text-placeholder body-s-bold underline">
          로그아웃
        </button>
      </div>
    </>
  );
}
