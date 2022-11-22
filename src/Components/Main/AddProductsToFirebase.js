import React, { useEffect, useState } from "react";
import { addProducts } from "../Utils/Utils";



function AddProductsToFirebase(){
            const [respuesta,setRespuesta] = useState({});
            const producto={
                name: "Giovanni",
                lastName: "Barolin"
        }
            console.log("addProducts")
            useEffect(()=>{
                    addProducts(producto)
                    .then(respuesta=>console.log("respuesta: " + respuesta))
                    .catch(error => console.log(error));
            },[]);
    return(
        <h1>{respuesta}</h1>
    )
}

export default AddProductsToFirebase;