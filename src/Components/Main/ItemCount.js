import React, {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Typography,IconButton} from "@mui/material";
import { useTheme } from "@mui/material";


function ItemCount({stock, onCount}){
    const [count,setCount]=useState(1);
    const theme = useTheme();
    const bColor = theme.palette.grey[300];


    const itemCountStyle={
        width:"100px",
        border:"1px solid",
        borderColor: bColor,
        borderRadius: "5px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"

}

    function handleSuma(){
        if(count <= stock){
            setCount(count + 1);
        }  
    }
    function handleResta(){
        if(count > 1){
            setCount(count - 1);
        }      
        }
        
    useEffect(()=>{
        onCount(count);
    },[count])

    return(
        <div style={itemCountStyle}>
            <IconButton onClick={handleResta} color="primary" disabled={count <= 1 ? true:false}> <RemoveIcon /> </IconButton>
            <Typography color="inherit" variant="h6" >{count}</Typography>
            <IconButton onClick={handleSuma} color="primary" disabled={count >= stock ? true:false}>   <AddIcon />    </IconButton> 
        </div>
    );


}



export default ItemCount;