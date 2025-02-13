import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeads = createAsyncThunk("lead/fetchLeads", async () => {
  const response = await axios.get(
    "https://nexa-crm-backend.vercel.app/api/leads"
  );

  return response.data;
});
export const addLead = createAsyncThunk("lead/addLead", async (data) => {
  console.log("data", data);
  const response = await axios.post(
    "https://nexa-crm-backend.vercel.app/api/leads",
    data
  );
  console.log("response data", response.data);
  return response.data.newLead;
});
export const updateLead = createAsyncThunk(
  "lead/updateLead",
  async (updatedData) => {
    console.log(updatedData);
    const { id, ...rest } = updatedData;
    const response = await axios.put(
      `https://nexa-crm-backend.vercel.app/api/leads/${id}`,
      rest
    );

    return response.data.updatedLead;
  }
);

export const deleteLead = createAsyncThunk("lead/deleteLead", async (id) => {
  const response = await axios.delete(
    `https://nexa-crm-backend.vercel.app/api/leads/${id}`
  );
  return response.data.deleteLead;
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
      }),
      builders.addCase(addLead.fulfilled, (state, action) => {
        state.leads = state.leads.push(action.payload);
      }),
      builders.addCase(updateLead.fulfilled, (state, action) => {
        const index = state.leads.findIndex((s) => s._id === action.payload.id);
        if (index !== -1) {
          state.leads[index] = action.payload;
        }
      }),
      builders.addCase(deleteLead.fulfilled, (state, action) => {
        state.leads = state.leads.filter(
          (lead) => lead._id !== action.payload._id
        );
      });
  },
});

export default leadSlice.reducer;
