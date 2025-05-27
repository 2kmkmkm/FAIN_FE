export type GuardianInfo = {
    userId: string;
    password: string;
    checkedPwd?: string;
    fName: string;
    fTel: string;
  };
  
  export type PatientBasicInfo = {
    name: string;
    birth: string;
    address: string;
  };
  
  export type PatientPhysicalInfo = {
    height: number | undefined;
    weight: number | undefined;
    bloodType: string;
  };
  
  export type PatientMedicalInfo = {
    disease: string;
    allergic: string;
    medicine: string;
    hospitalName: string;
    hospitalTel: string;
  };
  
  export type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

  export type GuardianFormProps = {
    guardian: GuardianInfo;
    handleGuardianChange: InputChangeHandler;
    handleCheckId: () => void
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
  { label: "아이디", key: "userId" },
  { label: "이름", key: "fName" },
  { label: "연락처", key: "fTel" },
];

export const PATIENT_INFO_CONFIG = [
  { label: "이름", key: "name" },
  { label: "생년월일", key: "birth" },
  { label: "주소", key: "address" },
  { label: "신장", key: "height" },
  { label: "체중", key: "weight" },
  { label: "혈액형", key: "bloodType" },
  { label: "질환", key: "disease" },
  { label: "알러지", key: "allergic" },
  { label: "복용약", key: "medicine" },
  { label: "주요 병원", key: "hospitalName" },
  { label: "병원 연락처", key: "hospitalTel" },
];

export const UNIT_MAP: Record<string, string> = {
  height: "cm",
  weight: "kg",
};