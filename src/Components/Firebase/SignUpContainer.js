import React, { useState, useContext } from "react";
import { CreateUser, UpdateUser,auth } from "./Firestore";
import {context} from "../../CustomProvider";
import { Navigate } from "react-router-dom";
import SnackbarDialog from "../Main/SnackbarDialog";
import Formulario from "../Main/Formulario";
import { checkoutForm } from "../Utils/Utils";

function SignUpContainer(){
    const [redirect,setRedirect] = useState(false);
    const valordelContexto = useContext(context);
    const {setUser,setIslogged} = valordelContexto;
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:2000});


    function handleClose(){
        if(snackBar.error){
            setRedirect(false);
            setIslogged(false);
        }else{
            setRedirect(true);
            setIslogged(true);
        }
        snackBar((prevValue)=>({...prevValue,state:false}));
    }


   async function registrar(data){

    try {
        await CreateUser(data.email,data.password);
        setSnackbar({state:true,error:false,mensaje:"Usuario creado exitosamente!",time:2000});
        try {
            UpdateUser(data.firstName);
        } catch (error) {  
            setSnackbar({state:true,error:true,message: error.message ,time:3000});
        }
        setUser(auth.currentUser);
    } catch (error) {
        setSnackbar({state:true,error:true,message: error.message ,time:3000});
    }

   }

    return (
                <>
                    <Formulario inputs={checkoutForm} buttonTitle="REGISTRARSE" datos={registrar}/>
                    <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.mensaje} time={snackBar.time} />
                    {redirect && <Navigate to="/productos" />}
                </>

                
    )
}

export default SignUpContainer;
