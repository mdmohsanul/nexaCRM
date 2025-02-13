import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAgents = createAsyncThunk("agents/fetchAgents", async () => {
  const response = await axios.get(
    "https://nexa-crm-backend.vercel.app/api/agents"
  );

  return response.data;
});

const agentsSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchAgents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.status = "success";
        state.agents = action.payload;
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.error = error.message;
      });
  },
});

export default agentsSlice.reducer;
