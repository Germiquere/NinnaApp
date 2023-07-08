import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadProducts = async (uid = "") => {
  if (!uid) throw new Error("El uid del user no existe");
  const collectionRef = collection(FirebaseDB, `${uid}/ninna/products`);
  const docs = await getDocs(collectionRef);
  const products = [];
  docs.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  // console.log(products);
  // const productsalpha = products.sort((a, b) =>
  //   a.product.localeCompare(b.product)
  // );
  // console.log(productsalpha);
  // return productsalpha;
  return products.sort((a, b) => a.product.localeCompare(b.product));
};
