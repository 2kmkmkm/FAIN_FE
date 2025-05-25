import { createAsyncThunk } from "@reduxjs/toolkit";
import { setGuardian, logout } from "./guardianSlice";
import { setPatient } from "./patientSlice";
import { getUserInfo, postLogin, patchUserInfo } from "../api/user";
import type { GuardianProps } from "./guardianSlice";
import type { PatientProps } from "./patientSlice";
import type { RootState } from "./store";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { userId, password }: { userId: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await postLogin(userId, password);
      const { token } = res;

      if (!token) {
        return rejectWithValue("토큰이 없습니다");
      }

      try {
        localStorage.setItem("token", token);
      } catch (e) {
        console.warn("토큰 저장 실패:", e);
      }

      const userInfo = await getUserInfo();

      const guardian = userInfo.guardian;
      const patient = userInfo.patient;

      dispatch(
        setGuardian({
          token,
          userId: guardian.userId,
          fName: guardian.fName,
          fTel: guardian.fTel,
          isAuthenticated: true,
        })
      );

      dispatch(setPatient(patient));

      console.log(res.message);
      return true;
    } catch (error) {
      console.error("로그인 에러:", error);
      dispatch(logout());
      return rejectWithValue("로그인에 실패했습니다");
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { dispatch }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
      return false;
    }

    try {
      const userInfo = await getUserInfo();
      dispatch(
        setGuardian({
          token,
          userId: userInfo.guardian.userId,
          fName: userInfo.guardian.fName,
          fTel: userInfo.guardian.fTel,
          isAuthenticated: true,
        })
      );
      dispatch(setPatient(userInfo.patient));
      
      return true;
    } catch {
      dispatch(logout());
      return false;
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (
    updatedData: {
      guardian?: Partial<Omit<GuardianProps, "token" | "userId">>;
      patient?: Partial<PatientProps>;
    },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      const res = await patchUserInfo(updatedData);

      if (!res.success) {
        return rejectWithValue(res.message || "정보 수정에 실패했습니다.");
      }

      const userInfo = await getUserInfo();
      const { guardian, patient } = userInfo;

      const { token, userId } = (getState() as RootState).guardian;

      dispatch(
        setGuardian({
          token,
          userId,
          fName: guardian.fName,
          fTel: guardian.fTel,
          isAuthenticated: true,
        })
      );

      dispatch(setPatient(patient));

      return res.message;
    } catch (error) {
      console.error("정보 수정 중 에러:", error);
      return rejectWithValue("정보 수정에 실패했습니다.");
    }
  }
);