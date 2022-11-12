import React from "react";
import { IconButton, Typography } from "@mui/material";
import ItemCount from "./ItemCount";
import DeleteIcon from '@mui/icons-material/Delete';

function Checkout({product,onDelete}){


    function handleClick(){
            onDelete(product.id);
    }
            
            return(
                    <div className="productItem">
                            <Typography color="primary">{product.name}</Typography>
                            <Typography >${product.price}</Typography>
                            <Typography >{product.cantidad}</Typography>
                            <Typography >${product.subTotal.toFixed(2)}</Typography>
                            <IconButton onClick={handleClick} color="primary"><DeleteIcon /></IconButton>
                   </div>
                    
            )



}


export default Checkout;

/*
<Typography className="productName" color="primary">{product.name}</Typography>
                            <Typography className="productPrice">${product.price}</Typography>
                            <Typography className="productCuantity">{product.cantidad}</Typography>
                            <Typography className="productSubtotal">${product.subTotal.toFixed(2)}</Typography>
                            <IconButton className="productDelete" color="primary"><DeleteIcon /></IconButton>

<div className="productItem">
                        <div className="item">
                            <Typography color="primary">{product.name}</Typography>
                        </div>
                        <div className="precio">
                            <Typography >${product.price}</Typography>
                        </div>
                        <div className="cantidad">
                            <Typography >{product.cantidad}</Typography>
                        </div>
                        <div className="total">
                            <Typography >${product.subTotal.toFixed(2)}</Typography>
                        </div>
                        <div className="delete"> 
                            <IconButton color="primary"><DeleteIcon /></IconButton>
                        </div>
                   </div>
                   */