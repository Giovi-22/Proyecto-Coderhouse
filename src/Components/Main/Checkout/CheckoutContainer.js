import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import {context} from "../../../CustomProvider";
import {addSaleToCollection} from "../../Utils/Utils";


function CheckoutContainer(){
    const [sale, setSale] = useState({});
    const [total, setTotal] = useState(0);
    const valorDelContexto = useContext(context);
    const {products,vaciarCarrito,setSaleId} = valorDelContexto;

    function endPurchase(data){
            setSale(()=>({data,products,Total:total}));
  }
  useEffect(()=>{
            let Total = 0;
            if(Object.keys(sale).length !== 0){
                const response = addSaleToCollection(sale);
                response
                .then(value => setSaleId(value.id))
                .catch(error=>console.log(error));
            }
            products.forEach(element=>Total = Total + element.subTotal);
            setTotal(Total);        
  },[sale,total])
  
    return (
            <CheckoutForm endPurchase={endPurchase} vaciarCarrito={()=>vaciarCarrito()} products={products} Total={total}/>
    );
}

export default CheckoutContainer;