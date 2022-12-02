import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FinishModal from "./FinishModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';
import { context } from "../../../CustomProvider";
import { checkoutForm } from "../../Utils/Utils";
import Formulario from "../Formulario";

const buttonStyle={
    width:"100%",
    height:"30px",
    justifyContent:"flex-start",
    marginBottom:"10px"
}

function CheckoutForm({endPurchase,vaciarCarrito,products,Total}){
    const [open,setOpen] = useState(false);
    const [redireccionar,setRedirect] = useState(false);
    const valordelContexto = useContext(context);
    const {Usuario} = valordelContexto;


    function handleClick(data){
                endPurchase(data);
                setOpen(true);     
    }
    function handleClose(){
            setOpen(false);   
            vaciarCarrito();         
    }
    function redirect(){
        setRedirect(true);
    }


    return(

            <>
            <Button startIcon={<ArrowBackIosIcon />} component={Link} to="/carrito" sx={buttonStyle} variant="outlined">Carrrito</Button>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            {Object.keys(Usuario).length !== 0 ? 
                <Typography variant="h4" >Comprar como {Usuario.email}</Typography>
                 :
               <Formulario inputs={checkoutForm} buttonTitle="FINALIZAR COMPRA" datos={handleClick}/>
            }
                <Box sx={{marginLeft:"30px",padding:"10px 0"}}>
                    <ul>
                        {products.map(value => <Typography key={value.id} variant="h6" color="primary"><CheckIcon/> {value.name}</Typography>)}
                    </ul>
                </Box>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-around", width:"100%"}}>
                <Typography variant="h5" >Total: {Total.toFixed(2)}</Typography>
                {Object.keys(Usuario).length && 
                <Button 
                variant="outlined" 
                onClick={()=>handleClick({
                    email:Usuario.email,
                    nombre:Usuario.displayName,
                    id:Usuario.uid})}
                    >
                    Finalizar compra
                    </Button>
                }
            </Box>
                {open && <FinishModal enabled={open} close={handleClose} redirect={redirect} />}
                {redireccionar && <Navigate to="/productos" />}
            </>
    );
}

export default CheckoutForm;

/*
 <form style={formStyle} >
                {checkoutForm.map(input => <TextField key={input.id} onChange={handleChange} value={datos[input.id]}  id={input.id} label={input.label} placeholder={input.placeHolder} focused />)}
                </form>
*/