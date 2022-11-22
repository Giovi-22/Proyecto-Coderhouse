import React from "react";
import {Routes,Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Bienvenidos from "./Bienvenidos";
import CheckoutContainer from "./CheckoutContainer";
import CheckoutForm from "./CheckoutForm";


function Main(){

    return(
            <main className="main">
                <Routes>
                    <Route path="/" element=<Bienvenidos />/>
                    <Route path="/:id" element=<ItemListContainer />/>
                    <Route path="/categorias/:id" element= <ItemListContainer /> />
                    <Route path="/item/:id" element=<ItemDetailContainer /> />
                    <Route path="/carrito" element= <CheckoutContainer /> />
                    <Route path="/formulario" element= <CheckoutForm /> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes> 
            </main>

    );

}

export default Main;