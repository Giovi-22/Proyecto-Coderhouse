import React, { useContext, useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from "@mui/material";
import {context} from "../../../CustomProvider";

function WhisIcon({product}){
    const [toggle,setToggle] = useState(false);
    const valordelContexto = useContext(context);
    const [producto,setProducto] = useState(product);
    const {addProductToWishList,deleteProductToWishList} = valordelContexto;

    function handleClick(){
            let producto = {...product};
            producto.cantidad = 1;
            producto.subTotal = producto.price;
            setProducto(producto);
            setToggle(!toggle);
            

    }
    useEffect(()=>{
        if(toggle){
            addProductToWishList(producto);
        }else{
            deleteProductToWishList(producto.id);
        }
    },[toggle])

    return(
        <IconButton onClick={handleClick}>{toggle ? <FavoriteIcon color="primary"/> : <FavoriteBorderIcon color="primary"/>}</IconButton>
    );
}

export default WhisIcon;