import instance from "./instance";
import type { GuardianProps } from "../app/guardianSlice";
import type { PatientProps } from "../app/patientSlice";

export const postLogin = async (userId: string, password: string) => {
  const res = await instance.post("/login", { userId, password });
  console.log("postLogin: ", res.data);
  return res.data;
};

export const getUserInfo = async () => {
  const res = await instance.get("/mypage");
  console.log("getUserInfo: ", res.data);
  return res.data;
};

export const patchUserInfo = async (updatedData: {
  guardian?: Partial<GuardianProps>;
  patient?: Partial<PatientProps>;
}) => {
  const res = await instance.patch("/guardian/profiles", updatedData);
  return res.data;
};