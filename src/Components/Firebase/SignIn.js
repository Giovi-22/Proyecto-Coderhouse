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
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:2000});
    const [datos, setDatos] = useState({email:"", password:""});
    const valordelContexto = useContext(context);
    const {setUser,setIslogged} = valordelContexto;



    async function handleDefault(){
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

    function handleChange(event){
        const {id,value} = event.target;
        setDatos(prevValue => ({...prevValue,[id]:value}));
}

    function handleClose(){
        if(snackBar.error){
            setRedirect(false); 
        }else{
            setRedirect(true);
        }
        setSnackbar((prevValue)=>({...prevValue,state:false}));
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
                <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message}/>
                {redirect && <Navigate to="/productos" />}
        </Box>
    );
}

export default SignIn;