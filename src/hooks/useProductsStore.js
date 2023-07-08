import { useDispatch, useSelector } from "react-redux";
import {
  startDeletingProduct,
  startLoadingProducts,
  startNewProduct,
  startSaveProduct,
  startSaveProductEdited,
} from "../store/products/thunks";
import {
  setActiveProduct,
  setCancelEditProduct,
  setEditProduct,
  setErrorMessage,
} from "../store/products/productsSlice";

export const useProductsStore = () => {
  const { isSaving, adding, products, activeProduct, edit, errorMessage } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleStartNewProduct = () => {
    dispatch(startNewProduct());
  };
  const handleStartLoadingProducts = () => {
    dispatch(startLoadingProducts());
  };
  const handleSetActiveProduct = (product) => {
    dispatch(setActiveProduct(product));
  };
  const handleSetEditProduct = () => {
    dispatch(setEditProduct());
  };
  const handleStartSaveProduct = () => {
    dispatch(startSaveProduct());
  };
  const handleSetCancelEditProduct = () => {
    dispatch(setCancelEditProduct());
  };
  const handleStartDeletingProduct = () => {
    dispatch(startDeletingProduct());
  };
  const handleSetErrorMessage = () => {
    dispatch(setErrorMessage());
  };
  const handleStartSaveProductEdited = () => {
    dispatch(startSaveProductEdited());
  };
  return {
    //PROPIEDADES
    adding,
    isSaving,
    products,
    activeProduct,
    edit,
    errorMessage,
    //METODOS
    handleStartNewProduct,
    handleStartLoadingProducts,
    handleSetActiveProduct,
    handleSetEditProduct,
    handleStartSaveProduct,
    handleSetCancelEditProduct,
    handleStartDeletingProduct,
    handleSetErrorMessage,
    handleStartSaveProductEdited,
  };
};
