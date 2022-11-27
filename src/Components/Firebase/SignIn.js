import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { context } from "../../CustomProvider";
import { SignInWithGoogle, SignInUser} from "../Firebase/Firestore";
import GoogleIcon from '@mui/icons-material/Google';
import SnackbarDialog from "../Main/SnackbarDialog";


const formStyle={
    display:"flex",
    width:"300px",
    height:"300px",
    margin: "0 10px",
    border:"1px solid #80808045",
    borderRadius: "15px",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center"

}
const inputStyle={
    width:"200px",
    height:"56px",
    borderRadius:"5px",
    border:"1px solid #80808045",
    paddingLeft:"5px"
}
const boxStyle ={
        display: "flex",

}
const boxAccountStyle = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"flex-start"
}
const googleButtonStyle = {
            width:"200px",
            height:"40px",
            margin:"0 0 10px 0"
        }


function SignIn(){
    const [redirect,setRedirect] = useState(false);
    const [openSnackbar,setOpenSnackbar] = useState({estado:false,error:false,mensaje:""});
    const valordelContexto = useContext(context);
    const {setUser,setIslogged} = valordelContexto;
    const [datos, setDatos] = useState({
        email:"",
        password:""
    });


    async function handleDefault(){
        try {
            const resultado = await SignInUser(datos.email,datos.password);
            setIslogged(true);
            setUser(resultado.user);
            setOpenSnackbar({estado:true,error:false,mensaje:"Usuario ingresado existosamente!"});
        } catch (error) {
            setOpenSnackbar({estado:true,error:true,mensaje:"usuario o contraseña incorrecta. Usuario no existe"});
        }
        
        
    }
    async function handleGoogle(){
        try {
            const resultado = await SignInWithGoogle();
            setIslogged(true);
            setOpenSnackbar({estado:true,error:false, mensaje:"Usuario ingresado existosamente!"});
            setUser(resultado.user);
        } catch (error) {
            setOpenSnackbar({estado:true,error:true,mensaje:"usuario o contraseña incorrecta. Usuario no existe"});

        }
        
    }

    function handleChange(event){
        const {id,value} = event.target;
        setDatos(prevValue => ({...prevValue,[id]:value}));
}

    function handleOpen(){
        if(openSnackbar.error === false){
            setRedirect(true);
            setOpenSnackbar({estado:false,error:false,mensaje:""});
        }else{
            setOpenSnackbar({estado:false,error:true,mensaje:""});
        }
        
    }
   
    return(
        <Box sx={boxStyle}>

                <form style={formStyle} >
                        <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                        <input onChange={handleChange} value={datos.password} type="password" placeholder="Password" style={inputStyle} id="password"/>
                        <Button variant="contained" onClick={handleDefault} id="default">Sign In</Button>
                </form>
                <Box sx={boxAccountStyle}>
                <Button sx={googleButtonStyle}variant="contained" onClick={handleGoogle} startIcon=<GoogleIcon /> id="google">Sign in with Google</Button>
                <Typography variant="subtitle1" >¿No tiene una cuenta? <Link to="/singup">Cree una.</Link></Typography>
                </Box>
                <SnackbarDialog abrir={openSnackbar.estado} setAbrir={handleOpen} mensaje={openSnackbar.mensaje}/>
                {redirect && <Navigate to="/productos" />}
        </Box>
    );
}

export default SignIn;