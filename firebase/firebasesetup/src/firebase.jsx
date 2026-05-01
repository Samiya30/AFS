// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoCSU-mluFvyS-ESnPmo0kRQ4JYu87ASQ",
  authDomain: "fir-bf6ec.firebaseapp.com",
  projectId: "fir-bf6ec",
  storageBucket: "fir-bf6ec.firebasestorage.app",
  messagingSenderId: "1072853223968",
  appId: "1:1072853223968:web:06278661bef06cd2b24a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);