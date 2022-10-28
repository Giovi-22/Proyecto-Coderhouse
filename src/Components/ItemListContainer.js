import React from "react";
import CardItem from "./CardItem";
import Products from "./Products";
import Baby from "../Images/Baby.jpeg";
function ItemListContainer({greeting}){

    return (
        <div className="main">
                <div className="itemsContainer">
                <CardItem productName={Products[0].name} productImage={Baby} productUrl={Products[0].url}/>
                </div>               
        </div>
             
    );
}

export default ItemListContainer;
