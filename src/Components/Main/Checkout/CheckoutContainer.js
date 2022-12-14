import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import {context} from "../../../CustomProvider";
import {addSaleToCollection} from "../../Utils/Utils";
import SnackbarDialog from "../SnackbarDialog";
import { Timestamp } from "firebase/firestore";
import { getUserShoppinglist } from "../../Firebase/Firestore";

function CheckoutContainer(){
    const [sale, setSale] = useState({});
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:1000});
    const valorDelContexto = useContext(context);
    const {products,vaciarCarrito,setSaleId,Total,Usuario,setCompras,vaciarCompras} = valorDelContexto;

    function handleClose(){
        setSnackbar((prevValue)=>({...prevValue,state:false}));
}
    function endPurchase(data){
            const fecha = Timestamp.now().toDate().toISOString();
                setSale(()=>({data,products,total:Total,fecha}));
                vaciarCompras();
            }
            
  useEffect(()=>{
            if(Object.keys(sale).length !== 0){
                const response = addSaleToCollection(sale);
                response
                .then(value => {
                    setSaleId(value.id);
                    getUserShoppinglist(Usuario.email)
                        .then(docs=>{
                        docs.forEach(doc=>{
                        
                        setCompras(value =>[...value,{...doc.data(),id:doc.id}])
                            })  
                        })
                        .catch(error=>setSnackbar({state:true,error:true,message:error.message,time:3000})); 
                        })
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