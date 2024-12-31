import { initializeApp } from "firebase/app";
//auth
import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5YTu_jMJQQeSrsIqg-IztLZ0rkY35mA8",
  authDomain: "clone-42855.firebaseapp.com",
  projectId: "clone-42855",
  storageBucket: "clone-42855.firebasestorage.app",
  messagingSenderId: "652572734841",
  appId: "1:652572734841:web:f2cec7d65057ef99636ba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
