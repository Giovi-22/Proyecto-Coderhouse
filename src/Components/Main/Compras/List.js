import { Button, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";


function List({product,showDetails}){
    
function handleClick(e){
        const {id} = e.target;
        showDetails(id);
}
    return (
        <TableRow>
        <TableCell >
        <Typography variant="subtitle1">{product.id}</Typography>
        </TableCell>
        <TableCell >
        <Typography variant="subtitle1">{product.fecha.slice(0,10)}</Typography>
        </TableCell>
        <TableCell >
        <Typography variant="subtitle1">Pendiente</Typography>
        </TableCell>
        <TableCell >
        <Typography variant="subtitle1">{product.total}</Typography>
        </TableCell>
        <TableCell >
        <Button id={product.id} onClick={handleClick}>Detalles</Button>
        </TableCell>
        </TableRow>
    );
}

export default List;