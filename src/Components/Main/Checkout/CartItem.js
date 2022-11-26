import React from "react";
import { IconButton, Typography } from "@mui/material";
import ItemCount from "../ItemCount";
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({product,onDelete, onCount}){

    function handleClick(){
            onDelete(product.id);
    }
    function handleCount(count){
            onCount(count,product.id);
    }
            
            return(
                    <div className="cart-item">
                            <Typography color="primary">{product.name}</Typography>
                            <Typography >${product.price}</Typography>
                            <Typography ><ItemCount stock={product.stock} onCount={handleCount} cuantity={product.cantidad}/></Typography>
                            <Typography >${product.subTotal.toFixed(2)}</Typography>
                            <IconButton onClick={handleClick} color="primary"><DeleteIcon /></IconButton>
                   </div>
                    
            )

}


export default CartItem;