import React from "react";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Item from "./Item";

const tableStyle={
    display:"flex",
    flexDirection:"column",
    width:{xs:"100%",md:"90%"},
    marginTop:"10px"
}
function Carrito({onDelete,onCount,total,products,vaciarCarrito}){
        const theme = useTheme();
        const isSm = useMediaQuery(theme.breakpoints.down("sm"));

        const buttonStyle={
                width:{sm:"60px", md:"auto"}
        }
        function handleDelete(productId){
                onDelete(productId);
        }
            
        function handleCount(count,id){
                onCount(count,id);
        };
        function handleClick(){
                vaciarCarrito()
        }

        return (
        <TableContainer component={Paper} sx={tableStyle}>
                <Table sx={{}}>
                    <TableHead>   
                        <TableRow>
                            <TableCell><Typography >Item</Typography></TableCell>
                            <TableCell><Typography >Precio</Typography></TableCell>
                            <TableCell><Typography >Cantidad</Typography></TableCell>  
                            <TableCell><Typography >Total</Typography></TableCell>
                       </TableRow>
                    </TableHead> 
                    <TableBody>
                            {products.map((value)=><Item  key={value.id} product={value} onDelete={handleDelete} onCount={handleCount}/>)}
                    </TableBody>
                        <TableRow>
                                <TableCell ><Typography className="total">Total</Typography></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align="right"><Typography className="total-productos">${products.length === 0 ? null : total.toFixed(2)}</Typography></TableCell>
                                <TableCell></TableCell>
                        </TableRow>  
                        <TableRow >
                                <TableCell><Button  variant="contained" color="primary" component={Link} to="/formulario" disabled={products.length === 0 ? true : false} >Continuar Compra</Button></TableCell>
                                <TableCell><Button  variant="contained" color="primary" onClick={handleClick} disabled={products.length === 0 ? true : false} >Vaciar carrito</Button></TableCell>               
                        </TableRow>  
                </Table>       
        </TableContainer>
        );

}

export default Carrito;