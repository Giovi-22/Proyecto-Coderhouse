import React, { useEffect, useState } from "react";
import { auth } from "./Firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Formulario from "../Main/Checkout/Formulario";


function SingUpForm(){
    const [userData,setUserdata] = useState({});
    const [register,setRegister] = useState(false);
    console.log(register);

   function registrar(data){
        setUserdata(data)
        setRegister(true);
   }
   useEffect(()=>{
        if(register){
            console.log(userData);
            const user = createUserWithEmailAndPassword(auth,userData.email,userData.password);
            user
            .then(value=>console.log(value))
            .catch(error => console.log(error));
            
        }
        console.log("useEffect");
        },[register])

    return (
                    <Formulario registrar={registrar}/>

                
    )
}

export default SingUpForm;