import Box from "../components/common/Box";
import InfoBox from "../components/mypage/InfoBox";
import {
  GUARDIAN_INFO_CONFIG,
  PATIENT_INFO_CONFIG,
  UNIT_MAP,
} from "../type/userType";
import { formatBirthInfo } from "../utils/dateUtils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const guardianData = {
  user_id: "2kmkmkm",
  f_name: "이경민",
  f_tel: "010-2911-6480",
};

const patientData = {
  name: "홍길동",
  birth: "2024-05-24",
  address: "(61188) 광주광역시 북구 용봉로 77 공과대학 7호관 215호",
  height: 180,
  weight: 70,
  bloodType: "A+",
  disease: "고혈압",
  allergy: "꽃가루",
  medicine: "혈압약",
  hospital: "전남대병원",
};

export default function MyPage() {
  const nav = useNavigate();

  const [processedPatientData, setProcessedPatientData] = useState(patientData);

  useEffect(() => {
    const { formattedDate, age } = formatBirthInfo(patientData.birth);

    setProcessedPatientData({
      ...patientData,
      birth: `${formattedDate} (만 ${age}세)`,
    });
  }, []);

  return (
    <div className="flex flex-col px-12 gap-5 pt-8">
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
          data={processedPatientData}
          unitMap={UNIT_MAP}
          editable
          onEdit={() => nav("/edit/patient")}
        />
      </Box>
      <button className="text-placeholder body-xs-bold underline">
        로그아웃
      </button>
    </div>
  );
}
