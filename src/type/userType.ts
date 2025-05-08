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
  