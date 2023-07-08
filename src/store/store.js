import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { productsSlice } from "./products";
import { brandsSlice } from "./brands";
import { categorySlice } from "./category";
import { searchSlice } from "./search";
import { salesSlice } from "./sales";
import { salingProductSlice } from "./salingProduct";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    brands: brandsSlice.reducer,
    categories: categorySlice.reducer,
    search: searchSlice.reducer,
    sales: salesSlice.reducer,
    salingProduct: salingProductSlice.reducer,
  },
});
