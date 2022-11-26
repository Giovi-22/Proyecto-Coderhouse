import React from "react";
import { Routes,Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Bienvenidos from "./Bienvenidos";
import CartContainer from "./Checkout/CartContainer";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import SingUpForm from "../Firebase/SingUpForm";
import SignIn from "../Firebase/SignIn";



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
                    <Route path="/singup" element= <SingUpForm /> />
                    <Route path="/signin" element= <SignIn /> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes> 
            </main>

    );

}

export default Main;