import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { postLogin } from "../api/user";

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
    { dispatch }
  ) => {
    const res = await postLogin(userId, password); 
    dispatch(setToken(res.token));
    return res;
  }
);

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
