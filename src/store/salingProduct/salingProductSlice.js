import { createSlice } from "@reduxjs/toolkit";
export const salingProductSlice = createSlice({
  name: "salingProduct",
  initialState: {
    quantity: null,
  },
  reducers: {
    setQuantity: (state, { payload }) => {
      state.quantity = payload?.quantity;
    },
  },
});
export const { setQuantity } = salingProductSlice.actions;
