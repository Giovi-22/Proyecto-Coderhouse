import React from "react";
import { Link, TableCell, TableRow, Typography } from "@mui/material";


function ListMobileRender({product,showDetails,isDetails}){
    
function handleClick(){
    showDetails(product.id);
}
    return (
        <>
        <TableRow>
            <TableCell>
                    <Typography variant="subtitle1">ID: </Typography>
                    <Typography variant="subtitle1">Fecha: </Typography>
                    <Typography variant="subtitle1">Estado: </Typography> 
                    <Typography variant="subtitle1">Total: </Typography>
                    
            </TableCell>
            <TableCell>
                    <Typography component={Link} id={product.id} onClick={handleClick} variant="subtitle1">{product.id}</Typography>
                    <Typography variant="subtitle1">{product.fecha.slice(0,10)}</Typography>
                    <Typography variant="subtitle1">Pendiente</Typography> 
                    <Typography variant="subtitle1">{product.total}</Typography> 
            </TableCell>
       
        </TableRow>

        </>
    );

}

export default ListMobileRender;

//{!isDetails &&<Button id={product.id} onClick={handleClick}>Detalles</Button>}