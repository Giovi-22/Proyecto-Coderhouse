import React,{ useContext } from "react";
import { context } from "../../../CustomProvider";
import Cart from "./Cart";


function CartContainer(){
            const {products,deleteProduct,updateProductCuantity,Total,vaciarCarrito} = useContext(context);

            function handleDelete(productId){
                deleteProduct(productId);
            }
            
            function handleCount(count,id){
                updateProductCuantity(count,id);
                };

            return (

                <Cart onDelete={handleDelete} onCount={handleCount} total={Total} products={products} vaciarCarrito={()=>vaciarCarrito()}/>

            );

}


export default CartContainer;