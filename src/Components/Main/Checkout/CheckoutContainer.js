import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import {context} from "../../../CustomProvider";
import {addSaleToCollection} from "../../Utils/Utils";


function CheckoutContainer(){
    const [sale, setSale] = useState({});
    const valorDelContexto = useContext(context);
    const {products,vaciarCarrito,setSaleId,Total,Usuario} = valorDelContexto;

    function endPurchase(data){
            if(Object.keys(Usuario).length){
                console.log("usuario registrado");
                const userData = {email:Usuario.email,nombre:Usuario.displayName};
                setSale(()=>({userData,products,total:Total}));
            }else{
                console.log("usuario no registrado");
                setSale(()=>({data,products,total:Total}));
            }
            
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
            <CheckoutForm endPurchase={endPurchase} vaciarCarrito={()=>vaciarCarrito()} products={products} Total={Total}/>
    );
}

export default CheckoutContainer;