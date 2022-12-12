import React, { useContext } from "react";
import { Paper, Typography } from "@mui/material";
import {context} from "../../../CustomProvider";
import Item from "./Item";
function Compras(){
        const valorDelContexto = useContext(context);
        const {compras} = valorDelContexto;

        return (
                <>
                <Typography variant="h4" color="primary">MIS COMPRAS</Typography>
                <Paper elevation={1} sx={{display:"flex",flexDirection:"column",width:"90%",marginTop:"10px"}}>
                        
                        <div className="checkoutContainer">
                                <Typography >Item</Typography>
                                <Typography >Precio</Typography>
                                <Typography >Cantidad</Typography>
                                <Typography >Total</Typography>
                                <div >  

                                </div>
                                <div className="productos">
                                {compras.map((value)=>value.map(doc=><Item  key={doc.id} product={doc}/>))}
                                </div>   
                        </div>

                </Paper>
                </>
        );

}

export default Compras;