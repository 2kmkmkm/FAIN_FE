import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type PatientProps = {
  name: string;
  birth: string;
  address: string;

  height: number | undefined;
  weight: number | undefined;
  bloodType: string;

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

  height: undefined,
  weight: undefined,
  bloodType: "",

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
  },
});

export const { setPatient } = patientSlice.actions;
export default patientSlice.reducer;
