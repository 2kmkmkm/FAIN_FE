import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { getUserInfo, postLogin } from "../api/user";
import { setGuardian } from "./guardianSlice";
import { setPatient } from "./patientSlice";

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { userId, password }: { userId: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await postLogin(userId, password);
      if (res.status !== 200 || !res.data.token) {
        return rejectWithValue("아이디 또는 비밀번호가 올바르지 않습니다.");
      }

      dispatch(setToken(res.data.token));

      const info = await getUserInfo();
      dispatch(setGuardian(info.guardian));
      dispatch(setPatient(info.patient));

      return res.data;
    } catch {
      return rejectWithValue("서버 오류 또는 잘못된 로그인 정보입니다.");
    }
  }
);

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
