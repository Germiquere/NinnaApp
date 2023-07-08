import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadBrands = async (uid = "") => {
  if (!uid) throw new Error("El uid del user no existe");
  const collectionRef = collection(FirebaseDB, `${uid}/ninna/brands`);
  const docs = await getDocs(collectionRef);
  const brands = [];
  docs.forEach((doc) => {
    brands.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return brands.sort((a, b) => a.brand.localeCompare(b.brand));
};
