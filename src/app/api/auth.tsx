import { RootState } from "@/store/reduxStore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginApi = createAsyncThunk<
  any,
  void,
  { rejectValue: { message: string } }
>("auth/login", async (_, { getState, rejectWithValue }) => {
  try {
    const { email, pin } = (getState() as RootState).login;

    const res = await axios.post(`https://bele.omnisuiteai.com/auth/login`, {
      email,
      pin,
    });

    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});
