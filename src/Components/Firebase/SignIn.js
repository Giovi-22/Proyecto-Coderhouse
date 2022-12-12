import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { context } from "../../CustomProvider";
import { SignInWithGoogle, SignInUser, getUserWishlist} from "../Firebase/Firestore";
import GoogleIcon from '@mui/icons-material/Google';
import SnackbarDialog from "../Main/SnackbarDialog";
import Formulario from "../Main/Formulario";
import { signinForm } from "../Utils/Utils";



const boxAccountStyle = {
        display: "flex",
        flexDirection:"column",
        justifyContent:{xs:"flex-start", md:"flex-end"},
        alignItems:"flex-start",
        marginLeft:{xs:"0", md:"10px"},
        marginTop:{xs:"20px", md:"0"}
}
const googleButtonStyle = {
            width:"200px",
            height:"40px",
            margin:"0 0 10px 0"
        }
const initialValues = {email:"",password:""};
function SignIn(){
    const [redirect,setRedirect] = useState(false);
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:2000});
    const valordelContexto = useContext(context);
    const {setUser,setIslogged,Usuario,Logged,fillWishlist} = valordelContexto;


    const boxStyle ={
        display: "flex",
        flexDirection:{xs:"column",md:"row"}
}

    async function handleDefault(datos){
        try {
            const resultado = await SignInUser(datos.email,datos.password);
            setUser(resultado.user);
            setIslogged(true);
            setSnackbar({state:true,error:false,message:"Usuario ingresado existosamente!",time:2000});
        } catch (error) {
            setSnackbar({state:true,error:true,message:error.message,time:3000});
        }
    }
    async function handleGoogle(){
        try {
            const resultado = await SignInWithGoogle();
            setSnackbar({state:true,error:false,message:"Usuario ingresado existosamente!",time:2000});
            setIslogged(true);
            setUser(resultado.user);
        } catch (error) {
            setSnackbar({state:true,error:true,message:error.message,time:3000});

        }
        
    }


    function handleClose(){
        if(snackBar.error){
            setRedirect(false); 
        }else{
            setRedirect(true);
        }
        setSnackbar((prevValue)=>({...prevValue,state:false}));
    }

    useEffect(()=>{
        if(Logged){
            getUserWishlist(Usuario.uid)
            .then((docs)=>{
                docs.forEach(doc=>{
                const products = doc.data().wishList;
                fillWishlist(products);
            })

        })
        .catch(error=>setSnackbar({state:true,error:true,message:error.message,time:3000}));
        }
        return function redireccionar(){
            setRedirect(false);
        }
    },[Logged])
   
    return(
        <Box sx={boxStyle}>

                <Formulario inputs={signinForm} datos={handleDefault} buttonTitle="Sign In" initialvalues={initialValues} />
                <Box sx={boxAccountStyle}>
                <Button sx={googleButtonStyle}variant="contained" onClick={handleGoogle} startIcon=<GoogleIcon /> id="google">Sign in with Google</Button>
                <Typography variant="subtitle1" >¿No tiene una cuenta? <Link to="/singup">Cree una.</Link></Typography>
                </Box>
                <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message}/>
                {redirect && <Navigate to="/productos" />}
        </Box>
    );
}

export default SignIn;