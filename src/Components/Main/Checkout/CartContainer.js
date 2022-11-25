import React,{ useContext, useEffect, useState } from "react";
import { context } from "../../../CustomProvider";
import Cart from "./Cart";


function CartContainer(){
            const {products,deleteProduct,updateProductCuantity} = useContext(context);
            const [total,setTotal] =useState(0);

            function handleDelete(productId){
                deleteProduct(productId);
            }
            
            function handleCount(count,id){
                updateProductCuantity(count,id);
                };

            useEffect(()=>{
                let tot = 0;
                products.forEach(value=>{
                    tot = tot + (value.price * value.cantidad);
                    value.subTotal = value.price * value.cantidad;
                });
                setTotal(tot);
            },[products])

            return (

                    <Cart onDelete={handleDelete} onCount={handleCount} total={total} products={products}/>

            );

}


export default CartContainer;