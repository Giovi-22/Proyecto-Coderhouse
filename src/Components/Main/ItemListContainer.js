import React, { useEffect,useState } from "react";
import CardItem from "./CardItem";
import {useParams} from "react-router-dom";
import {getProductsByCat,getProducts} from "../Utils/Utils";
import { CircularProgress } from "@mui/material";

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const {id} = useParams();
    
    useEffect(()=>{
            setProducts([]);
       if(id !== "Productos"){
            getProductsByCat(id)
                .then(value=>setProducts(value))
                .catch(err=>console.log(err));
       }
       else{
            getProducts()
                .then(value=>setProducts(value))
                .catch(err=>console.log(err));
                
       }
    },[id])

    return (
                <div className="itemsContainer">
                    {products.length === 0 ? <CircularProgress /> : products.map((prod)=><CardItem key={prod.id} products={prod}/>)}
                </div>               
             
    );
}

export default ItemListContainer;
