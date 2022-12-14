import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartItem  from "../Checkout/CartItem";

const titleStyle={
    width:"100%",
    display:"flex",
    justifyContent:"center",
    backgroundColor:"#9e9f9f96",
    alignItems:"center",
    padding:"16px",
    fontWeight:"bold"
}

function WishlistItem({products,onDelete,vaciarWishlist,addToCart}){

    function handleDelete(productID){
        onDelete(productID);
    }
    function handleClick(){
        addToCart();
    }
    return(
        <>
            <Box sx={titleStyle}>
            <Typography variant="h5" color="primary">WISHLIST</Typography>
            </Box>
           { products.map(producto=> <CartItem key={producto.id} product={producto} onDelete={handleDelete} isWishlist={true}/>)}
           <div className="btn-continuarcompra">
                <Button variant="contained" color="primary" onClick={handleClick}>Agregar al carrito</Button>
                <Button variant="contained" color="primary" onClick={()=>vaciarWishlist()}>Vaciar Wishlist</Button>
            </div>
        </>
    );
}

export default WishlistItem;