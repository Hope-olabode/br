// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "brandit-auth.firebaseapp.com",
  projectId: "brandit-auth",
  storageBucket: "brandit-auth.firebasestorage.app",
  messagingSenderId: "299580577552",
  appId: "1:299580577552:web:ed6cb509c3a09ed9517795"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);