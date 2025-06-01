import GuardianForm from "../components/signup/GuardianForm";
import PatientBasicForm from "../components/signup/PatientBasicForm";
import PatientPhysicalForm from "../components/signup/PatientPhysicalForm";
import PatientMedicalForm from "../components/signup/PatientMedicalForm";
import Button from "../components/common/Button";
import useFormState from "../hooks/useFormState";
import SignupModal from "../modals/SignupModal";
import { useState, useCallback } from "react";
import { formatDateToString } from "../utils/dateUtils";
import { useNavigate } from "react-router-dom";
import { getCheckId, postSignup } from "../api/user";
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

  const handleDateChange = useCallback(
    (date: Date | null) => {
      if (date) {
        handleBasicChange({
          target: {
            name: "birth",
            value: formatDateToString(date),
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    },
    [handleBasicChange]
  );

  const handleCheckId = useCallback(async () => {
    if (!guardian.userId) {
      alert("아이디를 입력해주세요.");
      return;
    }
    const res = await getCheckId(guardian.userId);

    if (!res.success) {
      alert(res.message);
      setIsCheckedId(false);
    } else {
      alert(res.message);
      setIsCheckedId(true);
    }
  }, [guardian.userId]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isCheckedId) {
        alert("아이디 중복 확인을 먼저 진행해주세요");
        return;
      }

      if (guardian.password !== guardian.checkedPwd) {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }

      const allFormValues = {
        ...guardian,
        ...basic,
        ...physical,
        ...medical,
      };

      const isEmpty = Object.values(allFormValues).some((value) => {
        if (typeof value === "string") {
          return value.trim() === "";
        }
        if (typeof value === "number") {
          return value === undefined || value === null;
        }
        return false;
      });

      if (isEmpty) {
        alert("모든 항목을 입력해주세요");
        return;
      }

      try {
        const formData = {
          ...guardian,
          ...basic,
          height: Number(physical.height),
          weight: Number(physical.weight),
          bloodType: physical.bloodType,
          ...medical,
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
    },
    [guardian, basic, physical, medical, isCheckedId]
  );

  return (
    <div className="px-14 flex flex-col min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col pt-6 pb-8 gap-7">
        <GuardianForm
          guardian={guardian}
          handleGuardianChange={handleGuardianChange}
          handleCheckId={handleCheckId}
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
