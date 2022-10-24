import React from "react";
import CardItem from "./CardItem";

function ItemListContainer({greeting}){

    return (
        <div className="main">
                <div className="itemsContainer">
                <CardItem greeting={greeting} />
                </div>               
        </div>
             
    );
}

export default ItemListContainer;
