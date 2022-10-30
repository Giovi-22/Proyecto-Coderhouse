import React, { useEffect,useState } from "react";
import Cards from "./Cards";
import Products from "./Products";
import {useParams} from "react-router-dom";

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const {cat} = useParams();
    
    useEffect(()=>{
        let simulacionPedido = new Promise((res)=>{
            setTimeout(()=>{
            res(Products);
            }
            ,1000);
            });
            simulacionPedido
            .then((result)=>setProducts(result));
            if(!cat){
                simulacionPedido
                .then((result)=>setProducts(result));
            }else{
                simulacionPedido
                .then((result)=>{
                const categoria = result.filter((value)=> value.category === cat)
                setProducts(categoria);
                }
                );
            }
    },[cat])

    return (
        <div className="main">
                <div className="itemsContainer">
                <Cards products={products}/>
                </div>               
        </div>
             
    );
}

export default ItemListContainer;
