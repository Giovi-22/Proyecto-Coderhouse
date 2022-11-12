import React,{useContext, useEffect, useState} from "react";
import {context} from "../../App";
import Checkout from "./Checkout";
import { Typography } from "@mui/material";

function CheckoutContainer(){
            const {products,deleteProduct} = useContext(context);
            const [total,setTotal] =useState(0);

            function handleDelete(productId){
                deleteProduct(productId);
            }
            
            useEffect(()=>{
                let tot = 0;
                products.map((value)=>tot = tot + value.subTotal);
                setTotal(tot)
            },[products])

            return (

                <div className="checkoutContainer">
                        <Typography >Item</Typography>
                        <Typography >Precio</Typography>
                        <Typography >Cantidad</Typography>
                        <Typography >Total</Typography>
                        <div >  
                                
                        </div>
                        <div className="productos">
                            {products.map((value,index)=><Checkout  key={value.id + index} product={value} onDelete={handleDelete}/>)}
                        </div>   
                        <Typography className="productTotal">Total</Typography>
                        <Typography className="total-productos">${products.length === 0 ? null : total}</Typography>
                </div>

            );

}


export default CheckoutContainer;

/*
 <>
                <div className="checkoutContainer">
                        <div className="item">
                            <Typography >Item</Typography>
                        </div>
                        <div className="precio">
                            <Typography >Precio</Typography>
                        </div>
                        <div className="cantidad">
                            <Typography >Cantidad</Typography>
                        </div>
                        <div className="total">
                            <Typography >Total</Typography>
                        </div>
                        <div className="delete">    
                        </div>
                    </div>
                    {products.map((value)=><Checkout  key={value.id} product={value}/>)}
                </> 
    */