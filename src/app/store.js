import { configureStore } from "@reduxjs/toolkit";
import agentsSlice from "../features/agentsSlice";
import commentSlice from "../features/commentSlice";
import filtersSlice from "../features/filtersSlice";
import leadSlice from "../features/leadSlice";

const store = configureStore({
  reducer: {
    lead: leadSlice,
    agents: agentsSlice,
    comments: commentSlice,
    filters: filtersSlice,
  },
});
export default store;
