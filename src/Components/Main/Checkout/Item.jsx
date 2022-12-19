import React from "react";
import { IconButton, TableCell, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import ItemCount from "../ItemCount";
import DeleteIcon from '@mui/icons-material/Delete';


function Item({product,onDelete, onCount,isWishlist = false}){
        const theme = useTheme();
        const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    function handleClick(){
            onDelete(product.id);
    }
    function handleCount(count){
            onCount(count,product.id);
    }
            
            return(
                    <TableRow >
                        <TableCell className="cartitem-tittle">
                                {isSm ? null : <img id="imagen" className="wish-image" src={product.image} alt="Cortantes impresos en 3D" />}
                                <Typography color="primary">{product.name}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography >${product.price}</Typography>
                        </TableCell>
                        <TableCell>
                            {isWishlist ? null : <ItemCount stock={product.stock} onCount={handleCount} cuantity={product.cantidad} modo="column"/>}
                        </TableCell>
                        <TableCell>
                            {isWishlist ? null : <Typography >${product.subTotal}</Typography>}
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={handleClick} color="primary"><DeleteIcon /></IconButton>
                        </TableCell>
                   </TableRow>
                    
            )

}


export default Item;