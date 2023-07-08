import { createSlice } from "@reduxjs/toolkit";
export const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    adding: false,
    isSaving: false,
    isLoading: true,
    brands: [],
    activeBrand: null,
    open: false,
    displayBrand: false,
    // activeBrand:{
    // id:"abc"
    // brand: "brand"}
  },
  reducers: {
    setOpen: (state) => {
      state.open = true;
      state.displayBrand = true;
    },
    setClose: (state) => {
      state.open = false;
      state.displayBrand = false;
    },
    setDisplayBrand: (state) => {
      state.displayBrand = true;
    },
    savingNewEmptyBrand: (state, { payload }) => {
      state.isSaving = true;
    },
    addNewEmptyBrand: (state, { payload }) => {
      state.isSaving = false;
      state.errorMessage = false;
      // state.brands.push(payload);
    },
    setActiveBrand: (state, { payload }) => {
      state.activeBrand = payload;
      console.log(payload);
    },
    setSaving: (state, { payload }) => {
      state.isSaving = true;
    },
    updateBrand: (state, { payload }) => {
      state.isSaving = false;
      // state.edit = false;
      state.adding = false;
      // state.errorMessage = false;
      state.brands.push(payload);
      state.brands = state.brands.map((brand) => {
        if (brand.id === payload.id) {
          return payload;
        }
        return brand;
      });
      state.brands = state.brands.sort((a, b) =>
        a.brand.localeCompare(b.brand)
      );
    },
    setBrands: (state, { payload }) => {
      state.brands = payload;
    },
    deleteBrandById: (state, { payload }) => {
      state.isSaving = false;
      state.activeBrand = null;
      // state.edit = false;
      // state.errorMessage = false;
      state.brands = state.brands.filter((brand) => brand.id !== payload);
    },
    setCloseDisplayBrand: (state) => {
      state.displayBrand = false;
    },
  },
});
export const {
  setOpen,
  setDisplayBrand,
  savingNewEmptyBrand,
  addNewEmptyBrand,
  setActiveBrand,
  setSaving,
  updateBrand,
  setBrands,
  deleteBrandById,
  setClose,
  setCloseDisplayBrand,
} = brandsSlice.actions;
