import instance from "./instance";
import type { GuardianInfo, PatientBasicInfo, PatientPhysicalInfo, PatientMedicalInfo } from "../type/userType";
import type { GuardianProps } from "../app/guardianSlice";
import type { PatientProps } from "../app/patientSlice";

export const postSignup = async (formData: GuardianInfo & PatientBasicInfo & PatientPhysicalInfo & PatientMedicalInfo) => {
  const res = await instance.post('/signup', formData);
  console.log("postSignup: ", res.data);
  return res.data;
}

export const postLogin = async (userId: string, password: string) => {
  const res = await instance.post("/login", { userId, password });
  console.log("postLogin: ", res);
  return res;
};

export const patchUserInfo = async (updatedData: {
  guardian?: Partial<GuardianProps>;
  patient?: Partial<PatientProps>;
}) => {
  const res = await instance.patch("/guardian/profiles", updatedData);
  console.log("patchUserInfo:" , res.data);
  return res.data;
};

export const getUserInfo = async () => {
  const res = await instance.get("/mypage");
  console.log("getUserInfo: ", res.data);
  return res.data.data;
};

export const getCheckId = async (userId: string) => {
  const res = await instance.get("/signup/check-id", { params: { userId }});
  console.log("getCheckId: ", res.data);
  return res.data;
}


