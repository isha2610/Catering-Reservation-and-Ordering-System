// Import the functions you need from the SDKs you need
// import 'firebase';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyChw1o5c8J8bS9SdoVDV6WFT2St9WZWPK4",
  authDomain: "cros-45717.firebaseapp.com",
  projectId: "cros-45717",
  storageBucket: "cros-45717.firebasestorage.app",
  messagingSenderId: "924762746061",
  appId: "1:924762746061:web:62a2f9d6911c41d9384d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export {auth, fs, storage};