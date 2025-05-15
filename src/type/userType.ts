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
    zone_code: string;
    road_address: string;
    detail_address: string;
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
  { label: "아이디", key: "guardianId" },
  { label: "이름", key: "guardianName" },
  { label: "전화번호", key: "guardianPhone" },
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
  { label: "복용약", key: "medication" },
  { label: "주요 병원", key: "mainHospital" },
];

export const UNIT_MAP: Record<string, string> = {
  height: "cm",
  weight: "kg",
};