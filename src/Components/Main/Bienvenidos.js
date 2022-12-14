import React from "react";
import { Typography } from "@mui/material";
import { serverTimestamp, Timestamp} from "firebase/firestore";
function Bienvenidos(){

    function handleClick(){
        console.log(Timestamp.now().toDate().toISOString())
    }

    return(

            <div className="bienvenidos">
                <Typography variant="h3">BIENVENIDOS A CB3DESIGN ROSARIO</Typography> 
                <button onClick={handleClick}>click me</button>
            </div>

    );
}

export default Bienvenidos;