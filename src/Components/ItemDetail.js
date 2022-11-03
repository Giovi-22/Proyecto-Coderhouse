import React from "react";
import ItemCount from "./ItemCount";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const itemdetailStyle={
            display: "flex",
            justifyContent:"center",
            alignItem:"center",
            height:"500px",
            width:"80%"

}
const imageStyle={
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

const cantidadStyle={
    display:"flex",
    width:"200px",
    justifyContent:"space-between",
    alignItem:"center",
}
function ItemDetail({product}){
   

    return (
        <div style={itemdetailStyle}>
            <div style={imageStyle}>
                <img id="imagen" style={{width:"300px", height:"300px"}} src={product.image} alt="Cortantes impresos en 3D" />
            </div>
            <div style={descriptionStyle}>
                    <Typography color="inherit" variant="h4" >{product.name}</Typography>
                    <Typography color="inherit" variant="body1" >{product.description}</Typography>
                <div style={cantidadStyle}>
                    <Typography gutterTop color="inherit" variant="h6" >Cantidad</Typography>
                    <ItemCount />
                </div>
                    <Typography color="inherit" variant="h3" sx={{alignSelf:"center"}} >${product.price}</Typography>
                    <Button color="primary" variant="outlined" sx={{alignSelf:"center"}}><ShoppingCartIcon />AGREGAR AL CARRITO</Button>   
            </div>
        </div>

    );
}

export default ItemDetail;