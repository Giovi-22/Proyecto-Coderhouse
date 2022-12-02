import React from "react";
import ItemCount from "./ItemCount";
import { Box, Paper, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WhisIcon from "./WishList/WhisIcon";


const itemdetailStyle={
            display: "flex",
            justifyContent:"center",
            alignItem:"center",
            height:"500px",
            width:"100%"

}
const imageContainerStyle={
            width:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
}


const descriptionStyle={
    width:"50%",
    paddingLeft:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"flex-start",
    margin:"5px 10px"
}

const countStyle={
    display:"flex",
    width:"200px",
    justifyContent:"space-between",
    alignItem:"center",
}
const wishIconStyle={
        width:"40px",
        height:"40px",
        display:"flex",
        justifyContent:"center",
        alignItem:"center"
}

function ItemDetail({product,onCount,addToContext,isLogged}){

    return (
        <Paper elevation={2} sx={itemdetailStyle}>
            <Box sx={wishIconStyle}>
                {isLogged && <WhisIcon product={product} />}
            </Box>
            <Box sx={imageContainerStyle}>
                <img id="imagen" className="detail-image" src={product.image} alt="Cortantes impresos en 3D" />
            </Box>
            <Box sx={descriptionStyle}>
                    <Typography color="inherit" variant="h4" >{product.name}</Typography>
                    <Typography color="inherit" variant="body1" >{product.description}</Typography>
                <Box sx={countStyle}>
                    <Typography color="inherit" variant="h6" >Cantidad</Typography>
                    <ItemCount stock={product.stock} onCount={(count)=>onCount(count)} cuantity={product.cantidad}/>
                </Box>
                    <Typography color="inherit" variant="h3" sx={{alignSelf:"center"}} >${product.price}</Typography>
                    {product.cantidad > 1 ? <Typography color="#3333337a" variant="h6" sx={{alignSelf:"center"}} >SUBTOTAL ${product.subTotal.toFixed(2)}</Typography> : null }
                    <Button onClick={()=>addToContext()} color="primary" variant="outlined" sx={{alignSelf:"center"}}><ShoppingCartIcon />AGREGAR AL CARRITO</Button>   
            </Box>
        </Paper>

    );
}

export default ItemDetail;