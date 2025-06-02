import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../app/authSlice"
import guardianReducer from "../app/guardianSlice"
import patientReducer from "../app/patientSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    guardian: guardianReducer,
    patient: patientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
