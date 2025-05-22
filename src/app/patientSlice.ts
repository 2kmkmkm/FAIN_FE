import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type PatientState = {
  basicInfo: {
    name: string;
    birth: string;
    address: string;
  };
  physicalInfo: {
    height: number;
    weight: number;
    bloodType: string;
  };
  medicalInfo: {
    medicine: string[];
    hospitalName: string;
    hospitalTel: string;
    disease: string[];
    allergic: string[];
  };
};

const initialState: PatientState = {
  basicInfo: {
    name: "",
    birth: "",
    address: "",
  },
  physicalInfo: {
    height: 0,
    weight: 0,
    bloodType: "",
  },
  medicalInfo: {
    medicine: [],
    hospitalName: "",
    hospitalTel: "",
    disease: [],
    allergic: [],
  },
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatient: (state, action: PayloadAction<Partial<PatientState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPatient } = patientSlice.actions;
export default patientSlice.reducer;
