import React from "react";
import ItemCount from "./ItemCount";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WhisIcon from "./WishList/WhisIcon";



const imageContainerStyle={
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            paddingBottom:"10px"
}

const descriptionStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    height:"400px",
    padding:"5px"
}

const countStyle={
    display:"flex",
    width:"200px",
    justifyContent:"space-between",
    alignItem:"center",
}

function ItemDetail({product,onCount,addToContext,isLogged}){
    const itemdetailStyle={
        width:{xs:"360px",md:"800px"},
}
    return (
        <Paper elevation={2} sx={{marginTop:"10px"}}>
        <Grid container  spacing={2} sx={itemdetailStyle} >
                <Grid item xs={12}>  
                    {isLogged && <WhisIcon product={product} />}
                </Grid>
                    <Grid item xs={12} md={6} sx={imageContainerStyle}>
                        <img id="imagen" className="detail-image" src={product.image} alt="Cortantes impresos en 3D" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={descriptionStyle}>
                        <Typography color="inherit" variant="h6" >{product.name}</Typography>
                        <Typography color="inherit" variant="body1" >{product.description}</Typography>
                        <Box sx={countStyle}>
                            <Typography color="inherit" variant="h6" >Cantidad</Typography>
                            <ItemCount stock={product.stock} onCount={(count)=>onCount(count)} cuantity={product.cantidad}/>
                        </Box>
                        <Typography color="inherit" variant="h4" sx={{alignSelf:"center"}} >${product.price}</Typography>
                        {product.cantidad > 1 ? <Typography color="#3333337a" variant="h6" sx={{alignSelf:"center"}} >SUBTOTAL ${product.subTotal.toFixed(2)}</Typography> : null }   
                        <Button onClick={()=>addToContext()} 
                            color="primary" 
                            variant="outlined" 
                            sx={{alignSelf:"center",height:{xs:"25px",md:"30px"}}}>
                            <ShoppingCartIcon />AGREGAR AL CARRITO
                        </Button>
                        </Box>
                    </Grid>
        </Grid>
        </Paper>
    );
}

export default ItemDetail;

