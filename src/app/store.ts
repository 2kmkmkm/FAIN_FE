import { configureStore } from '@reduxjs/toolkit';
import guardianReducer from "../app/guardianSlice"
import patientReducer from "../app/patientSlice"
import authRecuer from "../app/authSlice"

export const store = configureStore({
  reducer: {
    auth: authRecuer,
    guardian: guardianReducer,
    patient: patientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
