import { Button } from "@mui/material";
import React from "react";
import CartItem  from "../Checkout/CartItem";

function WishlistItem({products,onDelete,vaciarWishlist,addToCart}){

    function handleDelete(productID){
        onDelete(productID);
    }
    function handleClick(){
        addToCart();
    }
    return(
        <>
           { products.map(producto=> <CartItem key={producto.id} product={producto} onDelete={handleDelete} isWishlist={true}/>)}
           <div className="btn-continuarcompra">
                <Button variant="contained" color="primary" onClick={handleClick}>Agregar al carrito</Button>
                <Button variant="contained" color="primary" onClick={()=>vaciarWishlist()}>Vaciar Wishlist</Button>
            </div>
        </>
    );
}

export default WishlistItem;