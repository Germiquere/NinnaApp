import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyProduct,
  deleteProductById,
  savingNewProduct,
  setActiveProduct,
  setProducts,
  setSaving,
  updateProduct,
  updateProductEdited,
} from "./productsSlice";
import { loadProducts } from "../../helpers";

export const startNewProduct = () => {
  return async (dispatch, getState) => {
    // uid
    dispatch(savingNewProduct());
    const { uid } = getState().auth;
    const newProduct = {
      brand: "",
      category: "",
      product: "",
      description: "",
      stock: "",
      price: "0",
      sellingPrice: "0",
      markUp: "0",
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/ninna/products`));
    await setDoc(newDoc, newProduct);

    newProduct.id = newDoc.id;
    //dispatch
    dispatch(addNewEmptyProduct(newProduct));
    dispatch(setActiveProduct(newProduct));
  };
};
export const startLoadingProducts = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del user no existe");
    const products = await loadProducts(uid);
    dispatch(setProducts(products));
  };
};
export const startSaveProduct = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeProduct } = getState().products;
    const productToFirestore = {
      ...activeProduct,
    };
    delete productToFirestore.id;
    // console.log(productToFirestore);
    const docRef = doc(FirebaseDB, `${uid}/ninna/products/${activeProduct.id}`);
    await setDoc(docRef, productToFirestore, { merge: true });
    dispatch(updateProduct(activeProduct));
  };
};
export const startSaveProductEdited = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeProduct } = getState().products;
    const productToFirestore = {
      ...activeProduct,
    };
    delete productToFirestore.id;
    // console.log(productToFirestore);
    const docRef = doc(FirebaseDB, `${uid}/ninna/products/${activeProduct.id}`);
    await setDoc(docRef, productToFirestore, { merge: true });
    dispatch(updateProductEdited(activeProduct));
  };
};
export const startDeletingProduct = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { activeProduct } = getState().products;
    console.log(uid, activeProduct);
    const docRef = doc(FirebaseDB, `${uid}/ninna/products/${activeProduct.id}`);
    await deleteDoc(docRef);
    dispatch(deleteProductById(activeProduct.id));
  };
};
