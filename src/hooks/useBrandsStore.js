import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveBrand,
  setClose,
  setCloseDisplayBrand,
  setDisplayBrand,
  setOpen,
} from "../store/brands/brandsSlice";
import {
  startDeletingBrand,
  startLoadingBrands,
  startNewBrand,
  startSaveBrand,
} from "../store/brands/thunks";

export const useBrandsStore = () => {
  const { open, displayBrand, activeBrand, brands, isSaving } = useSelector(
    (state) => state.brands
  );
  const dispatch = useDispatch();
  const handleSetOpen = () => {
    dispatch(setOpen());
  };
  const handleSetDisplayBrand = () => {
    dispatch(setDisplayBrand());
  };
  const handleStartNewBrand = () => {
    dispatch(startNewBrand());
  };
  const handleSetActiveBrand = (brand) => {
    dispatch(setActiveBrand(brand));
  };
  const handleStartSaveBrand = () => {
    dispatch(startSaveBrand());
  };
  const handleStartLoadingBrands = () => {
    dispatch(startLoadingBrands());
  };
  const handleStartDeletingBrand = () => {
    dispatch(startDeletingBrand());
  };
  const handleSetClose = () => {
    dispatch(setClose());
  };
  const handleSetCloseDisplayBrand = () => {
    dispatch(setCloseDisplayBrand());
  };
  return {
    //PROPIEDADES
    open,
    displayBrand,
    activeBrand,
    brands,
    isSaving,
    //METODOS
    handleSetOpen,
    handleSetClose,
    handleSetDisplayBrand,
    handleStartNewBrand,
    handleSetActiveBrand,
    handleStartSaveBrand,
    handleStartLoadingBrands,
    handleStartDeletingBrand,
    handleSetCloseDisplayBrand,
  };
};
