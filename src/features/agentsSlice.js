import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAgents = createAsyncThunk("agents/fetchAgents", async () => {
  const response = await axios.get(
    "https://nexa-crm-backend.vercel.app/api/agents"
  );

  return response.data;
});

export const addAgent = createAsyncThunk("agent/addAgent", async (data) => {
  console.log(data);
  const response = await axios.post(
    "https://nexa-crm-backend.vercel.app/api/agents",
    data
  );
  console.log(response.data.newAgent);
  return response.data.newAgent;
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
        state.error = action.error.message;
      }),
      builders.addCase(addAgent.fulfilled, (state, action) => {
        state.agents.push(action.payload);
      });
  },
});

export default agentsSlice.reducer;
