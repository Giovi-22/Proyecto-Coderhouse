import React, { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getProductById} from "../Utils/Utils";
import { CircularProgress } from "@mui/material";

function ItemDetailContainer(){
    const [item, setItem] = useState({})
    const {id} = useParams();

    
    useEffect(()=>{
        getProductById(id)
            .then(resultado=>setItem(resultado))
            .catch(err=>console.log(err));

    },[id])

    return(
        <div className="main">
                <div className="itemsContainer">
                {Object.keys(item).length === 0 ?<CircularProgress /> :<ItemDetail product={item} />}
                </div>               
        </div>
    );
}


export default ItemDetailContainer;