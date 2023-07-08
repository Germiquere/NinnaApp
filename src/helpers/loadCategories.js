import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadCategories = async (uid = "") => {
  console.log("asdasd");
  if (!uid) throw new Error("El uid del user no existe");
  const collectionRef = collection(FirebaseDB, `${uid}/ninna/categories`);
  const docs = await getDocs(collectionRef);
  const categories = [];
  docs.forEach((doc) => {
    categories.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return categories.sort((a, b) => a.category.localeCompare(b.category));
};
