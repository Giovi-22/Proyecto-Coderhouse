import React from "react";
import {Routes,Route} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Bienvenidos from "./Bienvenidos";

function Main(){


    return(
            <div className="main">
                <Routes>
                    <Route path="/" element=<Bienvenidos />/>
                    <Route path="/:id" element=<ItemListContainer />/>
                    <Route path="/Categorias/:id" element= <ItemListContainer /> />
                    <Route path="/Item/:id" element=<ItemDetailContainer /> />
                    <Route path="/Carrito" element= <p>Carrito</p> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes>  
            </div>

    );

}

export default Main;