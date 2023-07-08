import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { useProductsStore } from "./useProductsStore";
import { useBrandsStore } from "./useBrandsStore";
import { useCategoryStore } from "./useCategoryStore";
// import { startLoadingProducts } from "../store/products/thunks";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { handleStartLoadingProducts } = useProductsStore();
  const { handleStartLoadingBrands } = useBrandsStore();
  const { handleStartLoadingCategories } = useCategoryStore();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      dispatch(login(user));
      // dispatch(startLoadingProducts());
      handleStartLoadingProducts();
      handleStartLoadingBrands();
      handleStartLoadingCategories();
    });
  }, []);
};
