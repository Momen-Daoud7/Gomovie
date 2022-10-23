// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9aOFbs9KNUGOGlX1bkEFLFySiP9wiDRc",
  authDomain: "netfilx-clone-4d198.firebaseapp.com",
  projectId: "netfilx-clone-4d198",
  storageBucket: "netfilx-clone-4d198.appspot.com",
  messagingSenderId: "799280140642",
  appId: "1:799280140642:web:94ce9fec3574563a891c3b",
  measurementId: "G-WPP382SPC9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
