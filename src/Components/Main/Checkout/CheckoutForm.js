import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FinishModal from "./FinishModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const boxStyle={
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

const buttonStyle={
    width:"100%",
    height:"30px",
    justifyContent:"flex-start",
    marginBottom:"10px"
}

function CheckoutForm({endPurchase,vaciarCarrito}){
    const [disabled,setDisabled] = useState(true);
    const [open,setOpen] = useState(false);
    const [redireccionar,setRedirect] = useState(false);
    const [datos, setDatos] = useState({
        nombre:"",
        apellido:"",
        email:"",
        confirmar_email:"",
        telefono:""
    });


    function handleChange(event){
            const {id,value} = event.target;
            setDatos(prevValue => ({...prevValue,[id]:value}));
    }
    function handleClick(){
            endPurchase(datos);
            setOpen(true);
    }
    function handleClose(){
            setOpen(false);
            setDatos({})      
            vaciarCarrito();         
    }
    function redirect(){
        setRedirect(true);
    }
    useEffect(()=>{
        console.log("entra en useeffect")
        if(datos.email !== "" && datos.confirmar_email !== ""){     
            if(datos.email === datos.confirmar_email){
                setDisabled(false);
            }else{
                setDisabled(true);
            }
        }
    },[datos.email,datos.confirmar_email])

    return(

            <>
            <Button startIcon={<ArrowBackIosIcon />} component={Link} to="/carrito" sx={buttonStyle} variant="outlined"></Button>
            <form style={boxStyle} >
                    <input onChange={handleChange} value={datos.nombre} type="text" placeholder="Nombre" style={inputStyle} id="nombre"/>
                    <input onChange={handleChange} value={datos.apellido} type="text" placeholder="Apellido" style={inputStyle} id="apellido"/>
                    <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                    <input onChange={handleChange} value={datos.confirmar_email} type="text" placeholder="email@example.com" style={inputStyle} id="confirmar_email"/>
                    <input onChange={handleChange} value={datos.telefono} type="text" placeholder="Telefono" style={inputStyle} id="telefono"/>
                </form>
                <Button variant="contained" disabled={disabled} onClick={handleClick}>Finalizar Compra</Button>
                {open && <FinishModal enabled={open} close={handleClose} redirect={redirect} />}
                {redireccionar && <Navigate to="/" />}
            </>
    );
}

export default CheckoutForm;