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
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { logout } from "../app/guardianSlice";

export default function MyPage() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const guardian = useAppSelector((state) => state.guardian);
  const patient = useAppSelector((state) => state.patient);

  const [processedPatientData, setProcessedPatientData] = useState(patient);
  const [processedGuardianData, setProcessedGuardianData] = useState({
    userId: guardian.userId,
    fName: guardian.fName,
    fTel: guardian.fTel,
  });

  useEffect(() => {
    const { formattedDate, age } = formatBirthInfo("2024-05-20");

    setProcessedPatientData({
      ...patient,
      birth: `${formattedDate} (만 ${age}세)`,
    });
  }, [patient]);

  useEffect(() => {
    setProcessedGuardianData({
      userId: guardian.userId,
      fName: guardian.fName,
      fTel: guardian.fTel,
    });
  }, [guardian]);

  return (
    <div className="flex flex-col px-12 gap-5 pt-8">
      <Box>
        <InfoBox
          title="보호자 정보"
          config={GUARDIAN_INFO_CONFIG}
          data={processedGuardianData}
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
      <button
        className="text-placeholder body-xs-bold underline"
        onClick={() => dispatch(logout())}
      >
        로그아웃
      </button>
    </div>
  );
}
