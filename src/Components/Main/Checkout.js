import React from "react";
import { IconButton, Typography } from "@mui/material";
import ItemCount from "./ItemCount";
import DeleteIcon from '@mui/icons-material/Delete';

function Checkout({product,onDelete, onCount}){

    function handleClick(){
            onDelete(product.id);
    }
    function handleCount(count){
            onCount(count,product.id);
    }
            
            return(
                    <div className="productItem">
                            <Typography color="primary">{product.name}</Typography>
                            <Typography >${product.price}</Typography>
                            <Typography ><ItemCount stock={product.stock} onCount={handleCount} cuantity={product.cantidad}/></Typography>
                            <Typography >${product.subTotal}</Typography>
                            <IconButton onClick={handleClick} color="primary"><DeleteIcon /></IconButton>
                   </div>
                    
            )

}


export default Checkout;