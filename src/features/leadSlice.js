import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeads = createAsyncThunk("lead/fetchLeads", async () => {
  const response = await axios.get(
    "https://nexa-crm-backend.vercel.app/api/leads"
  );

  return response.data;
});

const leadSlice = createSlice({
  name: "lead",
  initialState: {
    leads: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(fetchLeads.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.status = "success";
        state.leads = action.payload;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.error = error.message;
      });
  },
});

export default leadSlice.reducer;
