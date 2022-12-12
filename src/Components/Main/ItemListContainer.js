import React, { useContext, useEffect,useState } from "react";
import CardItem from "./CardItem";
import {useParams} from "react-router-dom";
import {getProductsByCat,getProducts} from "../Utils/Utils";
import { CircularProgress } from "@mui/material";
import { context } from "../../CustomProvider";
import SnackbarDialog from "./SnackbarDialog";

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:1000});
    const valorDelContexto = useContext(context);
    const {Logged} = valorDelContexto;
    const {id} = useParams();
    
    function handleClose(){
            setSnackbar((prevValue)=>({...prevValue,state:false}));
    }

    useEffect(()=>{
            setProducts([]);
       if(id !== "productos"){
            getProductsByCat(id)
                .then(doc=>{
                    const result = doc.docs.map(value =>({...value.data(),id:value.id}));
                    setProducts(result);
                })
                .catch(error=>setSnackbar({state:true,error:true,message:error.message,time:3000}));
       }
       else{
            getProducts()
                .then(result=>{
                    const resultado = result.docs.map(doc =>({...doc.data(),id:doc.id}));
                    setProducts(resultado);
                })
                .catch(error=>setSnackbar({state:true,error:true,message:error.message,time:3000}));      
       }
    },[id])

    return (
                <div className="itemsContainer">
                    {products.length === 0 ? <CircularProgress /> : products.map((prod)=><CardItem key={prod.id} products={prod} isLogged={Logged}/>)}
                    <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message} time={snackBar.time} />
                </div>               
             
    );
}

export default ItemListContainer;
