import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
  },
  reducers: {
    setText: (state, { payload }) => {
      state.searchText = payload;
    },
    clearText: (state) => {
      state.searchText = "";
    },
  },
});
export const { setText, clearText } = searchSlice.actions;
