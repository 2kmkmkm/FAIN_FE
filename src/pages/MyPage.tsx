import Box from "../components/common/Box";
import InfoBox from "../components/mypage/InfoBox";
import {
  GUARDIAN_INFO_CONFIG,
  PATIENT_INFO_CONFIG,
  UNIT_MAP,
} from "../type/userType";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../app/authSlice";
import { resetGuardian } from "../app/guardianSlice";
import { resetPatient } from "../app/patientSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import SideHeader from "../components/common/SideHeader";

export default function MyPage() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const guardian = useAppSelector((state) => state.guardian);
  const patient = useAppSelector((state) => state.patient);
  console.log(guardian);
  console.log(patient);
  const handleLogout = () => {
    dispatch(clearToken());
    dispatch(resetGuardian());
    dispatch(resetPatient());
  };

  return (
    <>
      <SideHeader title="마이페이지" />
      <div className="flex flex-col px-12 gap-5 pt-2">
        <Box>
          <InfoBox
            title="보호자 정보"
            config={GUARDIAN_INFO_CONFIG}
            data={guardian}
            editable
            onEdit={() => nav("/edit/guardian")}
          />
        </Box>
        <Box>
          <InfoBox
            title="환자 정보"
            config={PATIENT_INFO_CONFIG}
            data={patient}
            unitMap={UNIT_MAP}
            editable
            onEdit={() => nav("/edit/patient")}
          />
        </Box>
        <button
          className="text-placeholder body-xs-bold underline"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </>
  );
}
