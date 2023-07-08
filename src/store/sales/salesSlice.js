import { createSlice } from "@reduxjs/toolkit";
export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    sale: null,
  },
  reducers: {
    setSales: (state, actions) => {
      state.sale = 3;
    },
  },
});
export const { increment, setSales } = salesSlice.actions;
