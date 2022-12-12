import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Typography,IconButton, Box} from "@mui/material";
import { useTheme } from "@mui/material";


function ItemCount({stock, onCount, cuantity=1}){
    const [count,setCount]=useState(cuantity);
    const theme = useTheme();
    const bColor = theme.palette.primary.light;


    const itemCountStyle={
        width: {xs:"60px",md:"100px"},
        border: "2px solid",
        borderColor: bColor,
        borderRadius: "10px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
}
const iconbuttonStyle={
    width: {xs:"14px",md:"24px"},
}

    function handleSuma(){
        if(count < stock){
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
        <Box sx={itemCountStyle}>
            <IconButton  onClick={handleResta} color="primary" disabled={count <= 1 ? true:false}> <RemoveIcon sx={iconbuttonStyle}/> </IconButton>
            <Typography  color="inherit" variant="h6" > {count} </Typography>
            <IconButton  onClick={handleSuma} color="primary" disabled={count >= stock ? true:false}> <AddIcon sx={iconbuttonStyle}/> </IconButton> 
        </Box>
    );


}



export default ItemCount;