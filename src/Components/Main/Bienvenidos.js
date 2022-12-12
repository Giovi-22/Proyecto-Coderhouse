import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { getUserSale, updateWishlistProduct } from "../Firebase/Firestore";
import {context} from "../../CustomProvider";

function Bienvenidos(){
   const valordelContexto = useContext(context);
    const {Usuario,wishList} = valordelContexto;
     function handleClick(){
        updateWishlistProduct("48dJyLd84n2uYMGIWSG8",wishList);
    }


    return(

            <div className="bienvenidos">
                <Typography variant="h3">BIENVENIDOS A CB3DESIGN ROSARIO</Typography> 
                <button onClick={handleClick}>ClickMe</button>
            </div>

    );
}

export default Bienvenidos;