import React, { useState, useContext } from "react";
import { CreateUser, UpdateUser,auth } from "./Firestore";
import Formulario from "../Main/Checkout/Formulario";
import {context} from "../../CustomProvider";
import { Navigate } from "react-router-dom";

function SignUpForm(){
    const [register,setRegister] = useState(false);
    const valordelContexto = useContext(context);
    const {setUser,setIslogged} = valordelContexto;

   async function registrar(data){
    try {
        await CreateUser(data.email,data.password);
        try {
            UpdateUser(data.nombre);
        } catch (error) {
                    console.log(error);
        }
        setIslogged(true);
        setUser(auth.currentUser);
        setRegister(true);
    } catch (error) {
        console.log(error);
    }

   }

    return (
                <>
                    <Formulario registrar={registrar}/>
                    {register && <Navigate to="/productos" />}
                </>

                
    )
}

export default SignUpForm;