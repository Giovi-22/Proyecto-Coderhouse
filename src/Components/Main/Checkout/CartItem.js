import React from "react";
import { IconButton, Typography } from "@mui/material";
import ItemCount from "../ItemCount";
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({product,onDelete, onCount,isWishlist = false}){

    function handleClick(){
            onDelete(product.id);
    }
    function handleCount(count){
            onCount(count,product.id);
    }
            
            return(
                    <div className="cart-item">
                        <div className="cartitem-tittle">
                                <img id="imagen" className="wish-image" src={product.image} alt="Cortantes impresos en 3D" />
                                <Typography color="primary">{product.name}</Typography>
                        </div>
                        <Typography >${product.price}</Typography>
                        {isWishlist ? null : <Typography ><ItemCount stock={product.stock} onCount={handleCount} cuantity={product.cantidad}/></Typography>}
                        {isWishlist ? null : <Typography >${product.subTotal}</Typography>}
                        <IconButton onClick={handleClick} color="primary"><DeleteIcon /></IconButton>
                   </div>
                    
            )

}


export default CartItem;