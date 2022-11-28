import React, { useState, useContext } from "react";
import { CreateUser, UpdateUser,auth } from "./Firestore";
import Formulario from "../Main/Checkout/Formulario";
import {context} from "../../CustomProvider";
import { Navigate } from "react-router-dom";
import SnackbarDialog from "../Main/SnackbarDialog";

function SignUpForm(){
    const [register,setRegister] = useState(false);
    const valordelContexto = useContext(context);
    const {setUser,setIslogged} = valordelContexto;
    const [snackBar,setSnackbar] = useState({estado:false,error:false,mensaje:"",tiempo:2000});


    function handleAbrir(){
        setSnackbar({estado:false,error:false,mensaje:"",tiempo:2000});
        setRegister(true);
        setIslogged(true);
    }


   async function registrar(data){
    try {
        await CreateUser(data.email,data.password);
        setSnackbar({estado:true,error:false,mensaje:"Usuario creado exitosamente!"});
        try {
            UpdateUser(data.nombre);
            
        } catch (error) {  
                    console.log(error);
        }
        setUser(auth.currentUser);
    } catch (error) {
        setSnackbar({estado:true,error:true,mensaje: error.message ,tiempo:2000});
        console.log(error.message);
    }

   }

    return (
                <>
                    <Formulario registrar={registrar}/>
                    <SnackbarDialog abrir={snackBar.estado} setAbrir={handleAbrir} mensaje={snackBar.mensaje} tiempo={snackBar.tiempo} />
                    {register && <Navigate to="/productos" />}
                </>

                
    )
}

export default SignUpForm;