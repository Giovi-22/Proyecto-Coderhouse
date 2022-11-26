import { Button } from "@mui/material";
import React, { useEffect,useState } from "react";

const formStyle={
    display:"flex",
    width:"500px",
    height:"300px",
    marginBottom: "10px",
    border:"1px solid #80808045",
    borderRadius: "15px",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignItems:"center",

}
const inputStyle={
    width:"200px",
    height:"56px",
    borderRadius:"5px",
    border:"1px solid #80808045",
    paddingLeft:"5px"
}

function Formulario({userData,registrar}){
    const [disabled,setDisabled] = useState(true);
    const [datos, setDatos] = useState({
        nombre:"",
        apellido:"",
        email:"",
        confirmar_email:"",
        password:""
    });
    function handleClick(){
            registrar(datos);
    }
    function handleChange(event){
        const {id,value} = event.target;
        setDatos(prevValue => ({...prevValue,[id]:value}));
}

useEffect(()=>{
    if(datos.email !== "" && datos.confirmar_email !== ""){     
        if(datos.email === datos.confirmar_email && datos.password.length >= 5){
            setDisabled(false);
        }else{
            setDisabled(true);
    }          
}},[datos.email,datos.confirmar_email,datos.password])

    return(
        <>
                <form style={formStyle} >
                        <input onChange={handleChange} value={datos.nombre} type="text" placeholder="Nombre" style={inputStyle} id="nombre"/>
                        <input onChange={handleChange} value={datos.apellido} type="text" placeholder="Apellido" style={inputStyle} id="apellido"/>
                        <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                        <input onChange={handleChange} value={datos.confirmar_email} type="text" placeholder="email@example.com" style={inputStyle} id="confirmar_email"/>
                        <input onChange={handleChange} value={datos.password} type="password" placeholder="Password" style={inputStyle} id="password"/>
                        
                </form>
                <Button variant="contained" disabled={disabled} onClick={handleClick}>Sing Up</Button>
        </>
    );
}

export default Formulario;