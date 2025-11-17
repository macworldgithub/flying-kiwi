import { fetchCustomerServices } from "@/app/api/service";
import { createSlice } from "@reduxjs/toolkit";

interface ServicesState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  data: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomerServices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCustomerServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch services";
      });
  },
});

export default servicesSlice;
