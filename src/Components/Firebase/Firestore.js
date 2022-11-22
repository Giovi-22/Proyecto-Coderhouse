import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDsqvtWDtJ8_ZmN1_Vjn2f6nYalSsSC2Y",
  authDomain: "proyecto-coderhouse-91d2a.firebaseapp.com",
  projectId: "proyecto-coderhouse-91d2a",
  storageBucket: "proyecto-coderhouse-91d2a.appspot.com",
  messagingSenderId: "644191222445",
  appId: "1:644191222445:web:8b2d0b152cd5dc5523a424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
