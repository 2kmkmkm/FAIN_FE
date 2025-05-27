import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type GuardianProps = {
  token: string | null;
  userId: string,
  fName: string;
  fTel: string;
  isAuthenticated: boolean;
}

const initialState: GuardianProps = {
  token: null,
  userId: "",
  fName: "",
  fTel: "",
  isAuthenticated: false,
};

const guardianSlice = createSlice({
  name: 'guardian',
  initialState,
 reducers: {
    setGuardian: (state, action: PayloadAction<GuardianProps>) => {
      const { token, userId, fName, fTel, isAuthenticated } = action.payload;
      state.token = token;
      state.userId = userId;
      state.fName = fName;
      state.fTel = fTel;
      state.isAuthenticated = isAuthenticated;
    },
    logout: (state) => {
      state.token= null;
      state.userId = '';
      state.fName = '';
      state.fTel = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setGuardian, logout } = guardianSlice.actions;
export default guardianSlice.reducer;
