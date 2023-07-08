import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  deleteCategoryById,
  savingNewEmptyCategory,
  setActiveCategory,
  setCategories,
  setSaving,
  updateCategory,
} from "./categorySlice";
import { FirebaseDB } from "../../firebase/config";
import { loadCategories } from "../../helpers";

export const startNewCategory = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewEmptyCategory());
    const { uid } = getState().auth;
    const newBrand = {
      category: "",
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/ninna/categories`));
    await setDoc(newDoc, newBrand);
    console.log(newDoc);
    newBrand.id = newDoc.id;
    //dispatch
    // dispatch(addNewEmptyBrand(newBrand));
    dispatch(setActiveCategory(newBrand));
  };
};
export const startSaveCategory = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeCategory } = getState().categories;
    const categotyToFirestore = {
      ...activeCategory,
    };
    delete categotyToFirestore.id;
    // console.log(productToFirestore);
    const docRef = doc(
      FirebaseDB,
      `${uid}/ninna/categories/${activeCategory.id}`
    );
    await setDoc(docRef, categotyToFirestore, { merge: true });
    dispatch(updateCategory(activeCategory));
  };
};
export const startLoadingCategories = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del user no existe");
    const categories = await loadCategories(uid);
    dispatch(setCategories(categories));
    console.log(categories);
  };
};
export const startDeletingCategory = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeCategory } = getState().categories;
    console.log(uid, activeCategory);
    const docRef = doc(
      FirebaseDB,
      `${uid}/ninna/categories/${activeCategory.id}`
    );
    await deleteDoc(docRef);
    dispatch(deleteCategoryById(activeCategory.id));
  };
};
