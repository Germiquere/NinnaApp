import { createSlice } from "@reduxjs/toolkit";
export const categorySlice = createSlice({
  name: "category",
  initialState: {
    adding: false,
    isSaving: false,
    isLoading: true,
    categories: [],
    activeCategory: null,
    open: false,
    displayCategory: false,
    // activeBrand:{
    // id:"abc"
    // brand: "brand"}
  },
  reducers: {
    setOpen: (state) => {
      state.open = true;
      state.displayCategory = true;
    },
    setClose: (state) => {
      state.open = false;
      state.displayCategory = false;
    },
    setDisplayCategory: (state) => {
      state.displayCategory = true;
      console.log("ejecuto");
    },
    savingNewEmptyCategory: (state, { payload }) => {
      state.isSaving = true;
    },
    // addNewEmptyBrand: (state, { payload }) => {
    //   state.isSaving = false;
    //   state.errorMessage = false;
    //   // state.brands.push(payload);
    // },
    setActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
    setSaving: (state, { payload }) => {
      state.isSaving = true;
    },
    updateCategory: (state, { payload }) => {
      state.isSaving = false;
      // state.edit = false;
      state.adding = false;
      // state.errorMessage = false;
      state.categories.push(payload);
      state.categories = state.categories.map((category) => {
        if (category.id === payload.id) {
          return payload;
        }
        return category;
      });
      state.categories = state.categories.sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    deleteCategoryById: (state, { payload }) => {
      state.isSaving = false;
      state.activeCategory = null;
      // state.edit = false;
      // state.errorMessage = false;
      state.categories = state.categories.filter(
        (category) => category.id !== payload
      );
    },
    setCloseDisplayCategory: (state) => {
      state.displayCategory = false;
    },
    sortCategories: (state) => {
      console.log(state.categories);
    },
  },
});
export const {
  setOpen,
  setClose,
  setDisplayCategory,
  savingNewEmptyCategory,
  setActiveCategory,
  setSaving,
  updateCategory,
  setCategories,
  deleteCategoryById,
  setCloseDisplayCategory,
  sortCategories,
} = categorySlice.actions;
