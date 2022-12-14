import React from "react";
import { Box, Grid, TableCell, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";


function Item({product}){
        const theme = useTheme();
        const isSm = useMediaQuery(theme.breakpoints.down("sm"));

            
            return(
                <TableRow>
                        <TableCell >
                                <Box className="cartitem-tittle">
                                {isSm ? null : <img id="imagen" className="wish-image" src={product.image} alt="Cortantes impresos en 3D" />}
                                <Typography color="primary">{product.name}</Typography>
                                </Box>
                        </TableCell>
                        <TableCell>
                                <Typography >${product.price}</Typography>
                        </TableCell>
                        <TableCell >
                                <Typography>{product.cantidad}</Typography>
                        </TableCell>
                        <TableCell >
                                <Typography >${product.subTotal}</Typography>
                        </TableCell>
                </TableRow>   
            )

}


export default Item;