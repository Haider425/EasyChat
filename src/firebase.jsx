import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDES2mTMatBbcKssC7bo-E_0rowQ40IwmM",
  authDomain: "easychat-d8f01.firebaseapp.com",
  projectId: "easychat-d8f01",
  storageBucket: "easychat-d8f01.appspot.com",
  messagingSenderId: "897636409999",
  appId: "1:897636409999:web:4dedb88564ac4be027c6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);