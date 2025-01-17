// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";



// Your  web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA99MCyo1HxRrfU4Cb4y_VQqykPsZESFIw",
  authDomain: "financify-rec.firebaseapp.com",
  projectId: "financify-rec",
  storageBucket: "financify-rec.appspot.com",
  messagingSenderId: "968298838549",
  appId: "1:968298838549:web:d472a4698ebbf07c7fac1c",
  measurementId: "G-6R2RGEBX9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };