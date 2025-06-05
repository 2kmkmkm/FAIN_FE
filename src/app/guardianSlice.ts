import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type GuardianProps = {
  userId: string,
  fName: string;
  fTel: string;
}

const initialState: GuardianProps = {
  userId: "",
  fName: "",
  fTel: "",
};

const guardianSlice = createSlice({
  name: 'guardian',
  initialState,
 reducers: {
    setGuardian: (state, action: PayloadAction<GuardianProps>) => {
      const { userId, fName, fTel } = action.payload;
      state.userId = userId;
      state.fName = fName;
      state.fTel = fTel;
    },
    resetGuardian: () => initialState,
  },
});

export const { setGuardian, resetGuardian } = guardianSlice.actions;
export default guardianSlice.reducer;
