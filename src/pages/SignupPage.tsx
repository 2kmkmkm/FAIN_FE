import GuardianForm from "../components/signup/GuardianForm";
import PatientBasicForm from "../components/signup/PatientBasicForm";
import PatientPhysicalForm from "../components/signup/PatientPhysicalForm";
import PatientMedicalForm from "../components/signup/PatientMedicalForm";
import Button from "../components/common/Button";
import useFormState from "../hooks/useFormState";
import SignupModal from "../modals/SignupModal";
import { useState, type ChangeEvent } from "react";
import { formatDateToString } from "../utils/dateUtils";
import { useNavigate } from "react-router-dom";
import { getCheckeId, postSignup } from "../api/user";
import type {
  PatientMedicalInfo,
  PatientPhysicalInfo,
  GuardianInfo,
  PatientBasicInfo,
} from "../type/userType";

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCheckedId, setIsCheckedId] = useState<boolean>(false);

  const nav = useNavigate();

  const [guardian, handleGuardianChange] = useFormState<GuardianInfo>({
    userId: "",
    password: "",
    checkedPwd: "",
    fName: "",
    fTel: "",
  });

  const [basic, handleBasicChange] = useFormState<PatientBasicInfo>({
    name: "",
    birth: "",
    address: "",
  });

  const [medical, handleMedicalChange] = useFormState<PatientMedicalInfo>({
    disease: "",
    allergic: "",
    medicine: "",
    hospitalName: "",
    hospitalTel: "",
  });

  const [physical, handlePhysicalChange] = useFormState<PatientPhysicalInfo>({
    height: undefined,
    weight: undefined,
    bloodType: "",
  });

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const fakeEvent = {
        target: {
          name: "birth",
          value: formatDateToString(date),
        },
      } as ChangeEvent<HTMLInputElement>;

      handleBasicChange(fakeEvent);
    }
  };

  const handleCheckId = async (userId: string) => {
    const res = await getCheckeId(userId);

    if (res.isDuplicated) {
      alert(res.message);
      setIsCheckedId(false);
      return;
    } else if (!res.success) {
      alert(res.message);
      setIsCheckedId(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmpty = [
      ...Object.values(guardian),
      ...Object.values(basic),
      ...Object.values(physical),
      ...Object.values(medical),
    ].some((value) => typeof value === "string" && value.trim() === "");

    if (!isCheckedId) {
      alert("아이디 중복 확인을 먼저 진행해주세요");
      return;
    }

    if (isEmpty) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    try {
      const formData = {
        userId: guardian.userId,
        password: guardian.password,
        fName: guardian.fName,
        fTel: guardian.fTel,
        name: basic.name,
        birth: basic.birth,
        address: basic.address,
        height: Number(physical.height),
        weight: Number(physical.weight),
        bloodType: physical.bloodType,
        medicine: medical.medicine,
        hospitalName: medical.hospitalName,
        hospitalTel: medical.hospitalTel,
        disease: medical.disease,
        allergic: medical.allergic,
      };

      const res = await postSignup(formData);

      if (res.success) {
        setIsModalOpen(true);
      } else {
        alert(res.message || "회원가입에 실패했습니다.");
      }
    } catch (err) {
      console.error("회원가입 오류:", err);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="px-14 flex flex-col min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col pt-6 pb-8 gap-7">
        <GuardianForm
          guardian={guardian}
          handleGuardianChange={handleGuardianChange}
          handleCheckId={() => handleCheckId(guardian.userId)}
        />
        <PatientBasicForm
          basic={basic}
          handleBasicChange={handleBasicChange}
          handleDateChange={handleDateChange}
        />
        <PatientPhysicalForm
          physical={physical}
          handlePhysicalChange={handlePhysicalChange}
        />
        <PatientMedicalForm
          medical={medical}
          handleMedicalChange={handleMedicalChange}
        />
        <Button type="submit" label="회원가입" />
      </form>
      {isModalOpen && (
        <SignupModal
          onClose={() => {
            setIsModalOpen(false);
            nav("/login");
          }}
        />
      )}
    </div>
  );
}
