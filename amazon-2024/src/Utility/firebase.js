import { initializeApp } from "firebase/app";
//auth
import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Process.env.REACT_APP_apikey,
  authDomain: Process.env.REACT_APP_authDomain,
  projectId: Process.env.REACT_APP_projectId,
  storageBucket: Process.env.REACT_APP_storageBucket,
  messagingSenderId: Process.env.REACT_APP_messagingSenderId,
  appId: Process.env.REACT_APP_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
