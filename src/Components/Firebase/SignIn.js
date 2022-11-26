import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { context } from "../../CustomProvider";
import { SignInWithGoogle, SignInUser} from "../Firebase/Firestore";
import GoogleIcon from '@mui/icons-material/Google';
import { async } from "@firebase/util";


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
const googleButtonStyle = {
            width:"200px",
            height:"40px",
            alignSelf:"flex-end"
        }

function SignIn(){
    const [redirect,setRedirect] = useState(false);
    const valordelContexto = useContext(context);
    const {setUser} = valordelContexto;
    const [datos, setDatos] = useState({
        email:"",
        password:""
    });


    async function handleDefault(){
        try {
            const resultado = await SignInUser(datos.email,datos.password);
            setUser(resultado.user);
            setRedirect(true);
        } catch (error) {
            alert("usuario o contraseña incorrecta. Usuario no existe");
        }
        
        
    }
    async function handleGoogle(){
        try {
            const resultado = await SignInWithGoogle()
            setRedirect(true);
            setUser(resultado.user);
        } catch (error) {
            console.log(error);
        }
        
    }

    function handleChange(event){
        const {id,value} = event.target;
        setDatos(prevValue => ({...prevValue,[id]:value}));
}


    return(
        <Box sx={boxStyle}>

                <form style={formStyle} >
                        <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                        <input onChange={handleChange} value={datos.password} type="password" placeholder="Password" style={inputStyle} id="password"/>
                        <Button variant="contained" onClick={handleDefault} id="default">SignIn</Button>
                </form>
                <Button sx={googleButtonStyle}variant="contained" onClick={handleGoogle} startIcon=<GoogleIcon /> id="google">SignIn with Google</Button>
                {redirect && <Navigate to="/productos" />}
        </Box>
    );
}

export default SignIn;