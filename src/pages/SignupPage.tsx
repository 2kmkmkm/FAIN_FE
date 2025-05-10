import Header from "../components/common/Header";
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

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const nav = useNavigate();

  const [guardian, handleGuardianChange] = useFormState({
    user_id: "",
    password: "",
    checkedPwd: "",
    f_name: "",
    f_tel: "",
  });

  const [basic, handleBasicChange] = useFormState({
    name: "",
    birth: "",
    zone_code: "",
    road_address: "",
    detail_address: "",
  });

  const [medical, handleMedicalChange] = useFormState({
    disease: "",
    allergic: "",
    medicine: "",
    hospital_name: "",
  });

  const [physical, handlePhysicalChange] = useFormState({
    height: "",
    weight: "",
    bloodtype: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Header title="회원가입" isBack />
      <div className="px-14 flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col pt-6 pb-8 gap-7">
          <GuardianForm
            guardian={guardian}
            handleGuardianChange={handleGuardianChange}
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
          <Button
            type="submit"
            label="회원가입"
            onClick={() => setIsModalOpen(true)}
          />
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
    </>
  );
}
