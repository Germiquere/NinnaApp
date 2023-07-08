import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  addNewEmptyBrand,
  deleteBrandById,
  savingNewEmptyBrand,
  setActiveBrand,
  setBrands,
  setSaving,
  updateBrand,
} from "./brandsSlice";
import { FirebaseDB } from "../../firebase/config";
import { loadBrands } from "../../helpers";

export const startNewBrand = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewEmptyBrand());
    const { uid } = getState().auth;
    const newBrand = {
      brand: "",
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/ninna/brands`));
    await setDoc(newDoc, newBrand);
    console.log(newDoc);
    newBrand.id = newDoc.id;
    //dispatch
    // dispatch(addNewEmptyBrand(newBrand));
    dispatch(setActiveBrand(newBrand));
  };
};
export const startSaveBrand = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeBrand } = getState().brands;
    const brandToFirestore = {
      ...activeBrand,
    };
    delete brandToFirestore.id;
    // console.log(productToFirestore);
    const docRef = doc(FirebaseDB, `${uid}/ninna/brands/${activeBrand.id}`);
    await setDoc(docRef, brandToFirestore, { merge: true });
    dispatch(updateBrand(activeBrand));
  };
};
export const startLoadingBrands = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del user no existe");
    const brands = await loadBrands(uid);
    dispatch(setBrands(brands));
    console.log(brands);
  };
};
export const startDeletingBrand = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeBrand } = getState().brands;
    console.log(uid, activeBrand);
    const docRef = doc(FirebaseDB, `${uid}/ninna/brands/${activeBrand.id}`);
    await deleteDoc(docRef);
    dispatch(deleteBrandById(activeBrand.id));
  };
};
