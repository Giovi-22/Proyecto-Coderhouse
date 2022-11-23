import React,{ useContext, useEffect, useState } from "react";
import { context } from "../../CustomProvider";
import Checkout from "./Checkout";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CheckoutContainer(){
            const {products,deleteProduct,updateProduct} = useContext(context);
            const [total,setTotal] =useState(0);

            function handleDelete(productId){
                deleteProduct(productId);
            }
            
            function handleCount(count,id){
                updateProduct(count,id);
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
            <Paper elevation={1} sx={{display:"flex",flexDirection:"column",width:"90%",marginTop:"10px"}}>
                <div className="checkoutContainer">
                        <Typography >Item</Typography>
                        <Typography >Precio</Typography>
                        <Typography >Cantidad</Typography>
                        <Typography >Total</Typography>
                        <div >  
                                
                        </div>
                        <div className="productos">
                            {products.map((value,index)=><Checkout  key={value.id + index} product={value} onDelete={handleDelete} onCount={handleCount}/>)}
                        </div>   
                        <Typography className="productTotal">Total</Typography>
                        <Typography className="total-productos">${products.length === 0 ? null : total.toFixed(2)}</Typography>
                </div>
                <div className="btn-continuarcompra">
                        <Button variant="contained" color="primary" component={Link} to="/formulario" >Continuar Compra</Button>
                </div>
            </Paper>

            );

}


export default CheckoutContainer;