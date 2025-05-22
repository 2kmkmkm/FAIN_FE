import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserProps = {
    userId: number | null;
    fName: string;
    fTel: string;
    isAuthenticated: boolean;
}

const initialState: UserProps = {
  userId: null,
  fName: "",
  fTel: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
 reducers: {
    login: (state, action: PayloadAction<{ userId: number; fName: string; fTel: string }>) => {
      const { userId, fName, fTel } = action.payload;
      state.userId = userId;
      state.fName = fName;
      state.fTel = fTel;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userId = null;
      state.fName = '';
      state.fTel = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
