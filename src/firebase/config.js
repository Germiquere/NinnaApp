import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAX2jwmk3z5f6bG-8AMxnQMhkNxKOpcwlQ",
  authDomain: "ninnaapp.firebaseapp.com",
  projectId: "ninnaapp",
  storageBucket: "ninnaapp.appspot.com",
  messagingSenderId: "142753523384",
  appId: "1:142753523384:web:5c11b1733f2f80cca4b64d",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
