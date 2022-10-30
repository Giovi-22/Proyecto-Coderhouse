import React from "react";


function ItemDetail({product}){


    return (
        <div>
        <h1>{product.name}</h1>
        <h4>{product.price}</h4>
        <h5>{product.description}</h5>
        <img style={{width:"150px",height:"150px"}} src={product.image} alt="Cortantes impresos en 3D" />
        </div>

    );
}

export default ItemDetail;