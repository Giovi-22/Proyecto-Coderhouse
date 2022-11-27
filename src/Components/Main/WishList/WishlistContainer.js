import React, { useContext } from "react";
import { context } from "../../../CustomProvider";
import WishlistItem from "./WishlistItem";

function WishlistContainer(){
        const valorDelContexto = useContext(context);
        const {deleteProductToWishList,wishList,vaciarWishlist,updateCart} = valorDelContexto;

        function onDelete(productID){
            deleteProductToWishList(productID)
        }
        function addToCart(){       
            updateCart(wishList);
            vaciarWishlist();
        }

    return(
            <WishlistItem products={wishList} onDelete={onDelete} vaciarWishlist={()=>vaciarWishlist()} addToCart={addToCart}/>
    );
}

export default WishlistContainer;