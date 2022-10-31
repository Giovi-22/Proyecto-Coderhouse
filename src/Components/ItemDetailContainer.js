import React, { useEffect,useState } from "react";
import Products from "./Products";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [item, setItem] = useState({})
    const {id} = useParams();
    
    useEffect(()=>{
        let simulacionPedido = new Promise((res)=>{
            setTimeout(()=>{
            res(Products);
            }
            ,500);
            });
            simulacionPedido
            .then((result)=>{
                const resultado = result.find((value)=>value.id === id);
                setItem(resultado);
            });

    },[id])

    return(
        <div className="main">
                <div className="itemsContainer">
                <ItemDetail product={item}/>
                </div>               
        </div>
    );
}


export default ItemDetailContainer;