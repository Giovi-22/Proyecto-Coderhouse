import React, {useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {context} from "../../App";

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

function ItemDetail({product}){
    const [producto, setProducto] = useState(product);
    const [subtotal, setSTotal] = useState("");

    const valorDelContexto = useContext(context);

    function handleCount(count){
        let cantidad = count;
        let sTotal = producto.price * count;
        setProducto((prevValue)=> ({...prevValue,cantidad:cantidad,subTotal:sTotal}));     
    }

    function addToContext(){
        valorDelContexto.setProducts(producto)
    }

    useEffect(()=>{
        let sTotal = producto.price * producto.cantidad;
        setSTotal(sTotal.toFixed(2));
    },[producto.cantidad]);

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
                    <ItemCount stock={product.stock} onCount={handleCount}/>
                </div>
                    <Typography color="inherit" variant="h3" sx={{alignSelf:"center"}} >${product.price}</Typography>
                    {producto.cantidad > 1 ? <Typography color="#3333337a" variant="h6" sx={{alignSelf:"center"}} >SUBTOTAL ${subtotal}</Typography> : null }
                    <Button onClick={addToContext} color="primary" variant="outlined" sx={{alignSelf:"center"}}><ShoppingCartIcon />AGREGAR AL CARRITO</Button>   
            </div>
        </div>

    );
}

export default ItemDetail;