// store/login/loginSlice.ts
import { LoginApi } from "@/app/api/auth";
import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  email: string;
  pin: string;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  email: "",
  pin: "",
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPin: (state, action) => {
      state.pin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginApi.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(LoginApi.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : action.payload?.message || "Login failed";
      });
  },
});

export const { setEmail, setPin } = loginSlice.actions;
export default loginSlice;
