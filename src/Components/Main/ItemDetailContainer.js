import React, { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../Utils/Utils";
import { CircularProgress } from "@mui/material";
import { context } from "../../CustomProvider";
import DialogBox from "./DialogBox";

function ItemDetailContainer(){
    const [item, setItem] = useState({})
    const {id} = useParams();
    const [error, setError] = useState(false);
    const valorDelContexto = useContext(context);
    const {addProducts,Logged} = valorDelContexto;
    function handleCount(count){
        setItem((prevValue)=> ({...prevValue,cantidad:count,subTotal:(prevValue.price * count)}));  
    }

    function addToContext(){
        if(isNaN(item.cantidad)){
            addProducts({...item,cantidad:1,subTotal:item.price}); 
        }else{
            addProducts(item);
        }        
    }
    
    useEffect(()=>{
        getProductById(id)
        .then(doc =>{
            const product = doc.data();
            product.id = doc.id;
            setItem(product);
        })
        .catch(() => {
            setError(true);
        });
    },[id])

    return(
            <div className="main">
                <div className="itemsContainer">
                {Object.keys(item).length === 0 ?<CircularProgress /> :<ItemDetail product={item} onCount={handleCount} addToContext={addToContext} isLogged={Logged}/>}
                {error && <DialogBox titulo="Error" descripcion="El producto seleccionado no existe!" abrir={true}/>}
                </div>               
            </div>
    );
}


export default ItemDetailContainer;