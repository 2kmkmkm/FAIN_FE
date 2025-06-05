import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type PatientProps = {
  name: string;
  birth: string;
  address: string;

  height: string;
  weight: string;
  bloodtype: string;

  medicine: string;
  hospitalName: string;
  hospitalTel: string;
  disease: string;
  allergic: string;
};

const initialState: PatientProps = {
  name: "",
  birth: "",
  address: "",

  height: "",
  weight: "",
  bloodtype: "",

  medicine: "",
  hospitalName: "",
  hospitalTel: "",
  disease: "",
  allergic: "",
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatient: (state, action: PayloadAction<PatientProps>) => {
      return { ...state, ...action.payload };
    },
    resetPatient: () => initialState,
  },
});

export const { setPatient, resetPatient } = patientSlice.actions;
export default patientSlice.reducer;
