import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Typography,IconButton} from "@mui/material";
import { useTheme } from "@mui/material";


function ItemCount({stock, onCount, cuantity=1}){
    const [count,setCount]=useState(cuantity);
    const theme = useTheme();
    const bColor = theme.palette.primary.light;


    const itemCountStyle={
        width: "90px",
        border:"3px solid",
        borderColor: bColor,
        borderRadius: "10px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"

}

    function handleSuma(){
        if(count <= stock){
            setCount(count + 1);
            onCount(count + 1);  
        }

    }
    function handleResta(){
        if(count > 1){
            setCount(count - 1);  
            onCount(count-1);  
        } 
           
        }
    return(
        <div style={itemCountStyle}>
            <IconButton onClick={handleResta} color="primary" disabled={count <= 1 ? true:false}> <RemoveIcon /> </IconButton>
            <Typography color="inherit" variant="h6" >{count}</Typography>
            <IconButton onClick={handleSuma} color="primary" disabled={count >= stock ? true:false}>   <AddIcon />    </IconButton> 
        </div>
    );


}



export default ItemCount;