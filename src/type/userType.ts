export type GuardianInfo = {
    user_id: string;
    password: string;
    checkedPwd: string;
    f_name: string;
    f_tel: string;
  };
  
  export type PatientBasicInfo = {
    name: string;
    birth: string;
    address: string;
  };
  
  export type PatientPhysicalInfo = {
    height: string;
    weight: string;
    bloodtype: string;
  };
  
  export type PatientMedicalInfo = {
    disease: string;
    allergic: string;
    medicine: string;
    hospital_name: string;
  };
  
  export type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

  export type GuardianFormProps = {
    guardian: GuardianInfo;
    handleGuardianChange: InputChangeHandler;
  };
  
  export type PatientBasicFormProps = {
    basic: PatientBasicInfo;
    handleBasicChange: InputChangeHandler;
    handleDateChange: (date: Date | null) => void;
  };
  
  export type PatientPhysicalFormProps = {
    physical: PatientPhysicalInfo;
    handlePhysicalChange: InputChangeHandler;
  };
  
  export type PatientMedicalFormProps = {
    medical: PatientMedicalInfo;
    handleMedicalChange: InputChangeHandler;
  };
  
  export const GUARDIAN_INFO_CONFIG = [
  { label: "아이디", key: "user_id" },
  { label: "이름", key: "f_name" },
  { label: "연락처", key: "f_tel" },
];

export const PATIENT_INFO_CONFIG = [
  { label: "이름", key: "name" },
  { label: "생년월일", key: "birth" },
  { label: "주소", key: "address" },
  { label: "신장", key: "height" },
  { label: "체중", key: "weight" },
  { label: "혈액형", key: "bloodType" },
  { label: "질환", key: "disease" },
  { label: "알러지", key: "allergy" },
  { label: "복용약", key: "medicine" },
  { label: "주요 병원", key: "hospital" },
];

export const UNIT_MAP: Record<string, string> = {
  height: "cm",
  weight: "kg",
};