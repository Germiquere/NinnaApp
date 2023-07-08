import { useDispatch, useSelector } from "react-redux";
import {
  startDeletingCategory,
  startLoadingCategories,
  startNewCategory,
  startSaveCategory,
} from "../store/category/thunks";
import {
  setActiveCategory,
  setClose,
  setCloseDisplayCategory,
  setDisplayCategory,
  setOpen,
  sortCategories,
} from "../store/category/categorySlice";

export const useCategoryStore = () => {
  const { open, displayCategory, activeCategory, categories, isSaving } =
    useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleSetOpen = () => {
    dispatch(setOpen());
  };
  const handleStartNewCategory = () => {
    dispatch(startNewCategory());
  };
  const handleSetDisplayCategory = () => {
    dispatch(setDisplayCategory());
  };
  const handleSetActiveCategory = (category) => {
    dispatch(setActiveCategory(category));
  };
  const handleStartSaveCategory = () => {
    dispatch(startSaveCategory());
  };
  const handleStartLoadingCategories = () => {
    dispatch(startLoadingCategories());
  };
  const handleStartDeletingCategory = () => {
    dispatch(startDeletingCategory());
  };
  const handleSetClose = () => {
    dispatch(setClose());
  };
  const handleSetCloseDisplayCategory = () => {
    dispatch(setCloseDisplayCategory());
  };
  const handleSortCategories = () => {
    dispatch(sortCategories());
  };
  return {
    //PROPIEDADES
    open,
    displayCategory,
    activeCategory,
    categories,
    isSaving,
    handleSetOpen,
    //METODOS
    handleStartNewCategory,
    handleSetDisplayCategory,
    handleSetActiveCategory,
    handleStartSaveCategory,
    handleStartLoadingCategories,
    handleStartDeletingCategory,
    handleSetClose,
    handleSetCloseDisplayCategory,
    handleSortCategories,
  };
};
