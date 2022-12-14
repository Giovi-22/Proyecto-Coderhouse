import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {Link as Links} from "@mui/material";

function Compra({product}){

        return (
                <TableRow>
                        <TableCell >
                                <Links component={Link} underline="hover" to={"/item/"+product.id} >{product.name}</Links>
                        </TableCell>
                        <TableCell >
                                <Typography variant="subtitle1">${product.price}</Typography>
                        </TableCell>
                        <TableCell >
                                <Typography variant="subtitle1">{product.cantidad}</Typography>
                        </TableCell>
                        <TableCell >
                                <Typography variant="subtitle1">${product.subTotal}</Typography>
                        </TableCell>
                        </TableRow>

        );

}

export default Compra;