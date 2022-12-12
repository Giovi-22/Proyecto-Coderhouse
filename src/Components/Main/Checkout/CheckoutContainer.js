import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import {context} from "../../../CustomProvider";
import {addSaleToCollection} from "../../Utils/Utils";
import SnackbarDialog from "../SnackbarDialog";

function CheckoutContainer(){
    const [sale, setSale] = useState({});
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:1000});
    const valorDelContexto = useContext(context);
    const {products,vaciarCarrito,setSaleId,Total,Usuario} = valorDelContexto;

    function handleClose(){
        setSnackbar((prevValue)=>({...prevValue,state:false}));
}
    function endPurchase(data){
                setSale(()=>({data,products,total:Total}));
            }
            
  useEffect(()=>{
            if(Object.keys(sale).length !== 0){
                const response = addSaleToCollection(sale);
                response
                .then(value => setSaleId(value.id))
                .catch(error=>setSnackbar({state:true,error:true,message:error.message,time:3000}));
            }    
  },[sale])
  
    return (
        <>
            <CheckoutForm endPurchase={endPurchase} vaciarCarrito={()=>vaciarCarrito()} products={products} Total={Total}/>
            <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message} time={snackBar.time} />
        </>
    );
}

export default CheckoutContainer;