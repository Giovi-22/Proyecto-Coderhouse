import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import FinishModal from "./FinishModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';
import { context } from "../../../CustomProvider";
import { checkoutForm } from "../../Utils/Utils";
import Formulario from "../Formulario";
import SnackbarDialog from "../SnackbarDialog";

const buttonStyle={
    width:"100%",
    height:"30px",
    justifyContent:"flex-start",
    margin:"20px 0"
}

const initialValues = {firstName:"",lastName:"",email:"",confirm_email:""};

function CheckoutForm({endPurchase,vaciarCarrito,products,Total}){
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:2000});
    const [open,setOpen] = useState(false);
    const [redireccionar,setRedirect] = useState(false);
    const valordelContexto = useContext(context);
    const {Usuario} = valordelContexto;


    function handleClick(data){
            if(data.email !== undefined){
                endPurchase(data);
                setSnackbar({state:false,error:false,message:"" ,time:2000});
                setOpen(true);
            }else{
                setSnackbar({state:true,error:true,message:"completar todos los campos" ,time:3000});
            }   
    }
    function handleClose(){
            setOpen(false);   
            vaciarCarrito();         
    }
    function handleSnackbar(){
        setSnackbar((prevValue)=>({...prevValue,state:false}));
    }
    function redirect(){
        setRedirect(true);
    }


    return(

        <>
            <Button startIcon={<ArrowBackIosIcon />} component={Link} to="/carrito" sx={buttonStyle} variant="outlined">Carrrito</Button>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",md:"row"}}}>
                {Object.keys(Usuario).length !== 0 ? 
                    <Typography variant="h4" >Comprar como {Usuario.email}</Typography>
                     :
                <Formulario inputs={checkoutForm} buttonTitle="FINALIZAR COMPRA" datos={handleClick} initialvalues={initialValues}/>
                }
                <Box sx={{margin:"10px 0 0 30px",padding:"10px 0",display:"flex",flexDirection:"column"}}>
                    <ul>
                        {products.map(value => <Typography key={value.id} variant="h6" color="primary"><CheckIcon/> {value.name}</Typography>)}
                    </ul>
                    <Typography variant="h5"  >Total: {Total.toFixed(2)} </Typography>
                </Box>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-around", width:"100%"}}>
                {Object.keys(Usuario).length ? 
                <Button 
                variant="outlined" 
                onClick={()=>handleClick({
                    email:Usuario.email,
                    nombre:Usuario.displayName,
                    id:Usuario.uid
                    })}
                    >
                    Finalizar compra
                    </Button>
                    :
                    null
                }
            </Box>
                {open && <FinishModal enabled={open} close={handleClose} redirect={redirect} />}
                <SnackbarDialog open={snackBar.state} setClose={handleSnackbar} message={snackBar.message} time={snackBar.time} />
                {redireccionar && <Navigate to="/productos" />}
        </>
    );
}

export default CheckoutForm;
