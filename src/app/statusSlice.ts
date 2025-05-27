// src/store/statusSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { loginUser, checkAuth, updateUserInfo } from "./auth";

type StatusState = {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
};

const initialState: StatusState = {
  isLoading: false,
  isSuccess: false,
  error: null,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    resetStatus: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.error = "인증 확인에 실패했습니다.";
      });

    builder
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(updateUserInfo.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetStatus } = statusSlice.actions;
export default statusSlice.reducer;
