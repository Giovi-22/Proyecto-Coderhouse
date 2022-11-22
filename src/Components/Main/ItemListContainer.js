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
       if(id !== "productos"){
            getProductsByCat(id)
                .then(doc=>{
                    const result = doc.docs.map(value =>({...value.data(),id:value.id}));
                    setProducts(result);
                })
                .catch(err=>console.log(err));
       }
       else{
            getProducts()
                .then(result=>{
                    const resultado = result.docs.map(doc =>({...doc.data(),id:doc.id}));
                    setProducts(resultado);
                })
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
