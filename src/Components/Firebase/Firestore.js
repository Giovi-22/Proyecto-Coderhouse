import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


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
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore(app);

export function CreateUser(email,password){
  const user = createUserWithEmailAndPassword(auth,email,password);
  return user;
}
export function SignOutUser(){
          signOut(auth); 
}

export function SignInWithGoogle(){
  const usuario = signInWithPopup(auth,provider)
  return usuario;
}

export function SignInUser(email,password){
  const usuario = signInWithEmailAndPassword(auth,email,password);
  return usuario;
}

export function UpdateUser(nombre){
      const resultado = updateProfile(auth.currentUser,{displayName:nombre});
      return resultado;
}

export function User(){
      let user = auth.currentUser;
          if(user){
            return user;
          }else{
            return user;
      }
}
