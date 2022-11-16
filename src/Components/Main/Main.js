import React from "react";
import {Routes,Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Bienvenidos from "./Bienvenidos";
import CheckoutContainer from "./CheckoutContainer";

function Main(){


    return(
            <main className="main">
                <Routes>
                    <Route path="/" element=<Bienvenidos />/>
                    <Route path="/:id" element=<ItemListContainer />/>
                    <Route path="/Categorias/:id" element= <ItemListContainer /> />
                    <Route path="/Item/:id" element=<ItemDetailContainer /> />
                    <Route path="/Carrito" element= <CheckoutContainer /> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes>  
            </main>

    );

}

export default Main;