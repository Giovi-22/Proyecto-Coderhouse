import {Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import FinishModal from "./FinishModal";

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

function Form({endPurchase,vaciarCarrito}){
    const [datos, setDatos] = useState({
        nombre:"",
        apellido: "",
        email:"",
        confirmar_email:"",
        telefono:""
    });
    const [disabled,setDisabled] = useState(true);
    const [open,setOpen] = useState(false);

    function handleChange(event){
            const {id,value} = event.target;
            setDatos(prevValue => ({...prevValue,[id]:value}));
    }
    function handleClick(){
            setOpen(true);
            endPurchase(datos);
    }
    function handleClose(){
            setOpen(false);
            setDatos(()=>({ nombre:"",
            apellido: "",
            email:"",
            confirmar_email:"",
            telefono:""}))      
            vaciarCarrito();         
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
            <form style={boxStyle} >
                    <input onChange={handleChange} value={datos.nombre} type="text" placeholder="Nombre" style={inputStyle} id="nombre"/>
                    <input onChange={handleChange} value={datos.apellido} type="text" placeholder="Apellido" style={inputStyle} id="apellido"/>
                    <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                    <input onChange={handleChange} value={datos.confirmar_email} type="text" placeholder="email@example.com" style={inputStyle} id="confirmar_email"/>
                    <input onChange={handleChange} value={datos.telefono} type="text" placeholder="Telefono" style={inputStyle} id="telefono"/>
                </form>
                <Button variant="contained" disabled={disabled} onClick={handleClick}>Finalizar Compra</Button>
                {open && <FinishModal enabled={open} close={handleClose}/>}
            </>
    );
}

export default Form;