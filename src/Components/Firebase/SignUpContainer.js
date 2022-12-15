import React, { useState, useContext } from "react";
import { CreateUser, UpdateUser,auth } from "./Firestore";
import {context} from "../../CustomProvider";
import { Navigate } from "react-router-dom";
import SnackbarDialog from "../Main/SnackbarDialog";
import Formulario from "../Main/Formulario";
import { signupForm } from "../Utils/Utils";

const initialValues = {firstName:"",lastName:"",email:"",confirm_email:"",password:""};
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
        setSnackbar((prevValue)=>({...prevValue,state:false}));
    }

   async function registrar(data){
        
        if(data.email !== undefined){
        
    try {
        await CreateUser(data.email,data.password);
        setSnackbar({state:true,error:false,message:"Usuario creado exitosamente!",time:2000});
        try {
            UpdateUser(data.firstName);
        } catch (error) {  
            setSnackbar({state:true,error:true,message: error.message ,time:3000});
        }
        setUser(auth.currentUser);
    } catch (error) {
        setSnackbar({state:true,error:true,message: error.message ,time:3000});
    }
    
}else{
    setSnackbar({state:true,error:true,message:"completar todos los campos" ,time:3000});
}
   }

    return (
                <>
                    <Formulario inputs={signupForm} buttonTitle="REGISTRARSE" datos={registrar} initialvalues={initialValues}/>
                    <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message} time={snackBar.time} />
                    {redirect && <Navigate to="/productos" />}
                </>

                
    )
}

export default SignUpContainer;
