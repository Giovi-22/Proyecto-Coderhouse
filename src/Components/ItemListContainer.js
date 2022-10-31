import React, { useEffect,useState } from "react";
import CardItem from "./CardItem";
import Products from "./Products";
import {useParams} from "react-router-dom";

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const {id} = useParams();
    
    useEffect(()=>{
        let simulacionPedido = new Promise((res)=>{
            setTimeout(()=>{
            res(Products);
            }
            ,500);
            });
            simulacionPedido
            .then((result)=>setProducts(result));
            if(!id){
                simulacionPedido
                .then((result)=>setProducts(result));
            }else{
                simulacionPedido
                .then((result)=>{
                const categoria = result.filter((value)=> value.category === id)
                setProducts(categoria);
                }
                );
            }
    },[id])

    return (
        <div className="main">
                <div className="itemsContainer">
                    {products.map((prod)=><CardItem key={prod.id} products={prod}/>)}
                </div>               
        </div>
             
    );
}

export default ItemListContainer;
