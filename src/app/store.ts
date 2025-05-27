import { configureStore } from '@reduxjs/toolkit';
import guardianReducer from "../app/guardianSlice"
import patientReducer from "../app/patientSlice"

export const store = configureStore({
  reducer: {
    guardian: guardianReducer,
    patient: patientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
