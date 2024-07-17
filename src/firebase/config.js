// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLg8zuQES0KC-t9X3AyioWQ5kUmPCf3ew",
  authDomain: "netflix-gpt-67941.firebaseapp.com",
  projectId: "netflix-gpt-67941",
  storageBucket: "netflix-gpt-67941.appspot.com",
  messagingSenderId: "564647830727",
  appId: "1:564647830727:web:3c4d603ff2efd1debf0ae2",
  measurementId: "G-2H5WJQL0DJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
