import React from "react";
import ItemCount from "./ItemCount";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const itemdetailStyle={
            display: "flex",
            justifyContent:"center",
            alignItem:"center",
            height:"500px",
            width:"80%"

}
const imageContainerStyle={
            width:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
}
const imageStyle={
    width:"auto",
    height:"auto",
    maxWidth: "300px",
    maxHeight: "300px"
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

function ItemDetail({product,onCount,addToContext}){




    return (
        <div style={itemdetailStyle}>
            <div style={imageContainerStyle}>
                <img id="imagen" style={imageStyle} src={product.image} alt="Cortantes impresos en 3D" />
            </div>
            <div style={descriptionStyle}>
                    <Typography color="inherit" variant="h4" >{product.name}</Typography>
                    <Typography color="inherit" variant="body1" >{product.description}</Typography>
                <div style={countStyle}>
                    <Typography gutterTop color="inherit" variant="h6" >Cantidad</Typography>
                    <ItemCount stock={product.stock} onCount={(count)=>onCount(count)} cuantity={product.cantidad}/>
                </div>
                    <Typography color="inherit" variant="h3" sx={{alignSelf:"center"}} >${product.price}</Typography>
                    {product.cantidad > 1 ? <Typography color="#3333337a" variant="h6" sx={{alignSelf:"center"}} >SUBTOTAL ${product.subTotal.toFixed(2)}</Typography> : null }
                    <Button onClick={()=>addToContext()} color="primary" variant="outlined" sx={{alignSelf:"center"}}><ShoppingCartIcon />AGREGAR AL CARRITO</Button>   
            </div>
        </div>

    );
}

export default ItemDetail;