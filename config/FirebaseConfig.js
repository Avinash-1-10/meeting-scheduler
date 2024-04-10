// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRBASE_API_KEY,
  authDomain: "my-project-afbf5.firebaseapp.com",
  projectId: "my-project-afbf5",
  storageBucket: "my-project-afbf5.appspot.com",
  messagingSenderId: "790440920159",
  appId: "1:790440920159:web:481ca87aa40a71758987ea",
  measurementId: "G-967MY43RTQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
