import { configureStore } from "@reduxjs/toolkit";
import agentsSlice from "../features/agentsSlice";
import leadSlice from "../features/leadSlice";

const store = configureStore({
  reducer: {
    lead: leadSlice,
    agents: agentsSlice,
  },
});
export default store;
