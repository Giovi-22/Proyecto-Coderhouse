import { initializeApp } from "firebase/app";
import { collection, doc, FieldPath, getDocs, getFirestore, query, QuerySnapshot, updateDoc, where } from "firebase/firestore";
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
const salesCollections = collection(db,"ventas");
const wishlistCollections = collection(db,"wishlist");

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

export function getUserSale(){
     const result = query(salesCollections,where("data.email","==","giovannibarolin@gmail.com"));   
      return getDocs(result);
}
export function getUserWishlist(userId){
    const result = query(wishlistCollections,where("user.id","==",userId));
    return getDocs(result);
}

export  function updateWishlistProduct(userId,wishlist){
    const documentReference = doc(wishlistCollections,userId);
    return updateDoc(documentReference,"wishList",wishlist);
}

export function getUserShoppinglist(userEmail){
  const result = query(salesCollections,where("data.email","==",userEmail));
  return getDocs(result);
}
