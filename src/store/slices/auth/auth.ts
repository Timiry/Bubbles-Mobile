import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/store";

interface AuthData {
  isTwoFactorAuthentication?: boolean;
  tokenType?: string;
  expiresIn?: number;
  token?: string;
}

const initialState: Required<AuthData> = {
  isTwoFactorAuthentication: false,
  tokenType: "",
  expiresIn: 0,
  token: "",
};

interface LoginData {
  otp?: string;
  phoneNumber?: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<AuthData>) => {
      if (action.payload?.token) {
        localStorage.setItem("token", action.payload?.token);
      }
      Object.assign(state, action.payload);
    },
    removeSession: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
});

export const loginStep = createSlice({
  name: "step",
  initialState: {
    value: "phone",
    phoneNumber: " ",
    otp: " ",
  },
  reducers: {
    phone: (state) => {
      state.value = "phone";
    },
    otp: (state) => {
      state.value = "otp";
    },
    complete: (state) => {
      state.value = "complete";
    },
    setPhoneNumber: (state, action: PayloadAction<LoginData>) => {
      if (action.payload?.phoneNumber) {
        localStorage.setItem("phoneNumber", action.payload?.phoneNumber);
      }
    },
  },
});

export const { setAccessToken, removeSession } = authSlice.actions;

export default authSlice.reducer;

export const accessTokenSelector = (state: RootState) => state.auth.token;

export const { phone, otp, complete, setPhoneNumber } = loginStep.actions;

export const loginStepReduser = loginStep.reducer;

export const selectStep = (state: RootState) => state.step.value;
