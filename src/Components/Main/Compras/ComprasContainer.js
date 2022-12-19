import React, { useContext, useState } from "react";
import {  Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import {context} from "../../../CustomProvider";
import Compra from "./Compra";
import List from "./List";
import ListMobileRender from "./ListMobileRender";

const gridStyle={
    width:"100%",
    marginTop:"10px"
}
const titleStyle={
    display:"flex",
    justifyContent:"center",
    backgroundColor:"#9e9f9f96",
    alignItems:"center",
    padding:"16px",
    fontWeight:"bold"
}
function ComprasContainer(){
        const theme = useTheme();
        const isSM = useMediaQuery(theme.breakpoints.down("sm"));
        const valorDelContexto = useContext(context);
        const [compra,setCompra] = useState({data:{},fecha:"",id:"",products:[]});
        const [isDetails,setDetails] = useState(false);
        const {compras} = valorDelContexto;

        function handleClick(event){
                setDetails(false);
               
        }
        function showDetails(id){
            setCompra(compras.find(value=>value.id === id));
            setDetails(true);
        }
        console.log(isSM);

        return (
            <Grid container spacing={2} sx={gridStyle} justifyContent="center">
                <Grid item xs={12} sx={titleStyle} >
                    <Typography variant="h5" color="primary">COMPRAS REALIZADAS</Typography>
                </Grid>
                {isDetails&&
                <Grid item xs={12} >
                    <Button onClick={handleClick} color="primary">Regresar</Button>
                </Grid>
                }
                <Grid item xs ={12} md={10}>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                {!isSM &&
                                <TableRow>
                                    <TableCell >{isDetails ? "Item":"Pedido"}</TableCell>
                                    <TableCell >{isDetails ? "Precio":"Fecha"}</TableCell>
                                    <TableCell >{isDetails ? "Cantidad":"Estado"}</TableCell>
                                    <TableCell >{isDetails ? "Subtotal":"Total"}</TableCell>
                                    {!isDetails && <TableCell >Detalles</TableCell>}
                                </TableRow>
                                }
                            </TableHead>
                            <TableBody>
                            {isDetails ?
                                    compra.products.map(doc=><Compra key={doc.id} product={doc}/>)
                                     :
                                     isSM ?
                                    compras.map(value=><ListMobileRender key={value.id} product={value} showDetails={showDetails}/>)
                                    :
                                    compras.map((value)=><List key={value.id} product={value} showDetails={showDetails}/>)
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>          
               
            </Grid>
    
        );

}

export default ComprasContainer;