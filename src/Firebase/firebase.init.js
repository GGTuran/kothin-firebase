/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz18mfTWKdy8Qn97580fFVI-X5vGcTsTY",
  authDomain: "kothin-firebase.firebaseapp.com",
  projectId: "kothin-firebase",
  storageBucket: "kothin-firebase.appspot.com",
  messagingSenderId: "70342485420",
  appId: "1:70342485420:web:64228ba26a324b36798609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app