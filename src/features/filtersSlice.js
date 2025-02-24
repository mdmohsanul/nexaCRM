import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filterSalesAgent: "",
    filterPriority: "",
    filterTimeToClose: "",
    filterStatus: "",
  },
  reducers: {
    setFilterSalesAgent: (state, action) => {
      state.filterSalesAgent = action.payload;
    },
    setFilterPriority: (state, action) => {
      state.filterPriority = action.payload;
    },
    setFilterTimeToClose: (state, action) => {
      state.filterTimeToClose = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});
export const {
  setFilterSalesAgent,
  setFilterTimeToClose,
  setFilterPriority,
  setFilterStatus,
} = filterSlice.actions;

export default filterSlice.reducer;
