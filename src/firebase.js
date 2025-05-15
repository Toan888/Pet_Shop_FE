// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmSNqXr8YsvX5UAWe2nGoydEv1C0pDdCI",
  authDomain: "verify-3a58e.firebaseapp.com",
  projectId: "verify-3a58e",
  storageBucket: "verify-3a58e.appspot.com",
  messagingSenderId: "242314561228",
  appId: "1:242314561228:web:ba8bf60706e3045f9d6469",
  measurementId: "G-S8HNLKZ2L6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
