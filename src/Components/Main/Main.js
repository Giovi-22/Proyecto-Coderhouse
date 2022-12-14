import React from "react";
import { Routes,Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Bienvenidos from "./Bienvenidos";
import CartContainer from "./Checkout/CartContainer";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import SignUpContainer from "../Firebase/SignUpContainer";
import SignIn from "../Firebase/SignIn";
import WishlistContainer from "./WishList/WishlistContainer";
import ComprasContainer from "./Compras/ComprasContainer";


function Main(){

    return(
            <main className="main">
                <Routes>
                    <Route path="/" element=<Bienvenidos />/>
                    <Route path="/:id" element=<ItemListContainer />/>
                    <Route path="/categorias/:id" element= <ItemListContainer /> />
                    <Route path="/item/:id" element=<ItemDetailContainer /> />
                    <Route path="/carrito" element= <CartContainer /> />
                    <Route path="/formulario" element= <CheckoutContainer /> />
                    <Route path="/singup" element= <SignUpContainer /> />
                    <Route path="/signin" element= <SignIn /> />
                    <Route path="/compras" element= <ComprasContainer /> />
                    <Route path="/wishlist" element= <WishlistContainer /> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes> 
            </main>

    );

}

export default Main;