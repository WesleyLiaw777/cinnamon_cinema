// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQlrwJvBfv7x9gn5D-L5Ov_wtQPoN1xa4",
  authDomain: "netflix-clone-6f947.firebaseapp.com",
  projectId: "netflix-clone-6f947",
  storageBucket: "netflix-clone-6f947.appspot.com",
  messagingSenderId: "311177236179",
  appId: "1:311177236179:web:07de9e9514fa512751ce26",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
