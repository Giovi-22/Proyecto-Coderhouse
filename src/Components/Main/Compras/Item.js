import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";


function Item({product}){
        const theme = useTheme();
        const isSm = useMediaQuery(theme.breakpoints.down("sm"));

            
            return(
                    <Box className="cart-item">
                        <Box className="cartitem-tittle">
                                {isSm ? null : <img id="imagen" className="wish-image" src={product.image} alt="Cortantes impresos en 3D" />}
                                <Typography color="primary">{product.name}</Typography>
                        </Box>
                        <Typography >${product.price}</Typography>
                        <Typography >{product.cantidad}</Typography>
                        <Typography >${product.subTotal}</Typography>
                   </Box>
                    
            )

}


export default Item;