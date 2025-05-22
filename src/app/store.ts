import { configureStore } from '@reduxjs/toolkit';
import userRecucer from "../app/userSlice";
import patientReducer from "../app/patientSlice"

export const store = configureStore({
  reducer: {
    user: userRecucer,
    patient: patientReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
