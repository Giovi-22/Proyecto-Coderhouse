import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import {context} from "../../CustomProvider";
import {addSaleToCollection} from "../Utils/Utils";
function FormContainer(){
    const [sale, setSale] = useState({});
    const valorDelContexto = useContext(context);
    const {products,vaciarCarrito,setSaleId} = valorDelContexto;

    function endPurchase(data){
            setSale(()=>({data,products}));
  }
  useEffect(()=>{
            if(Object.keys(sale).length !== 0){
                const response = addSaleToCollection(sale);
                response
                .then(value => setSaleId(value.id))
                .catch(error=>console.log(error));
            }
            
  },[sale])
  
    return (
            <Form endPurchase={endPurchase} vaciarCarrito={()=>vaciarCarrito()}/>
    );
}

export default FormContainer;