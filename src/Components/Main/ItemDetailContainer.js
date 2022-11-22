import React, { useContext, useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getProductById} from "../Utils/Utils";
import { CircularProgress } from "@mui/material";
import { context } from "../../CustomProvider";

function ItemDetailContainer(){
    const [item, setItem] = useState({})
    const {id} = useParams();
    const valorDelContexto = useContext(context);

    function handleCount(count){
        setItem((prevValue)=> ({...prevValue,cantidad:count,subTotal:(prevValue.price * count)}));  
    }

    function addToContext(){
        if(isNaN(item.cantidad)){
            valorDelContexto.addProducts({...item,cantidad:1}); 
        }else{
            valorDelContexto.addProducts(item);
        }
         
}
    
    useEffect(()=>{
        getProductById(id)
        .then(doc =>{
            const product = doc.data();
            product.id = doc.id;
            setItem(product);
        })
        .catch(error => console.log(error));
    },[id])

    return(
        <div className="main">
                <div className="itemsContainer">
                {Object.keys(item).length === 0 ?<CircularProgress /> :<ItemDetail product={item} onCount={handleCount} addToContext={addToContext}/>}
                </div>               
        </div>
    );
}


export default ItemDetailContainer;