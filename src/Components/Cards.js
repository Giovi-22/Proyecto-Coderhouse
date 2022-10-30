import React from "react";
import Item from "./Item";


function Cards({products}){
    console.log(products);
    
    return(
        <>
            {products.map((value)=>
                <Item 
                    productName={value.name}
                    productImage={value.image}
                    productUrl={value.url}
                />
            )}
        </>
    )

}

export default Cards;