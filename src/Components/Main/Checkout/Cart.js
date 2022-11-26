import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart({onDelete,onCount,total,products}){

        function handleDelete(productId){
                onDelete(productId);
        }
            
        function handleCount(count,id){
                onCount(count,id);
        };

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
                                {products.map((value)=><CartItem  key={value.id} product={value} onDelete={handleDelete} onCount={handleCount}/>)}
                                </div>   
                                <Typography className="total">Total</Typography>
                                <Typography className="total-productos">${products.length === 0 ? null : total.toFixed(2)}</Typography>
                        </div>
                        <div className="btn-continuarcompra">
                                <Button variant="contained" color="primary" component={Link} to="/formulario" disabled={products.length === 0 ? true : false} >Continuar Compra</Button>
                        </div>
                </Paper>

        );

}

export default Cart;