import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FinishModal from "./FinishModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';

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

const buttonStyle={
    width:"100%",
    height:"30px",
    justifyContent:"flex-start",
    marginBottom:"10px"
}

function CheckoutForm({endPurchase,vaciarCarrito,products,Total}){
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
            <Button startIcon={<ArrowBackIosIcon />} component={Link} to="/carrito" sx={buttonStyle} variant="outlined">Carrrito</Button>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <form style={formStyle} >
                        <input onChange={handleChange} value={datos.nombre} type="text" placeholder="Nombre" style={inputStyle} id="nombre"/>
                        <input onChange={handleChange} value={datos.apellido} type="text" placeholder="Apellido" style={inputStyle} id="apellido"/>
                        <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                        <input onChange={handleChange} value={datos.confirmar_email} type="text" placeholder="email@example.com" style={inputStyle} id="confirmar_email"/>
                        <input onChange={handleChange} value={datos.telefono} type="text" placeholder="Telefono" style={inputStyle} id="telefono"/>
                </form>
                <Box sx={{marginLeft:"30px",padding:"10px 0"}}>
                    <ul>
                        {products.map(value => <Typography key={value.id} variant="h6" color="primary"><CheckIcon/> {value.name}</Typography>)}
                    </ul>
                </Box>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-around", width:"100%"}}>
                <Button variant="contained" disabled={disabled} onClick={handleClick}>Finalizar Compra</Button>
                <Typography variant="h5" >Total: {Total.toFixed(2)}</Typography>
            </Box>
                {open && <FinishModal enabled={open} close={handleClose} redirect={redirect} />}
                {redireccionar && <Navigate to="/productos" />}
            </>
    );
}

export default CheckoutForm;
