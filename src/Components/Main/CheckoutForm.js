import {Button} from "@mui/material";
import React from "react";

const boxStyle={
    display:"flex",
    width:"500px",
    height:"300px",
    border:"1px solid #80808045",
    borderRadius: "15px",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignItems:"center",

}
const inputStyle={
        width:"200px",
        height:"56px",
        borderRadius:"5px",
        border:"1px solid #80808045",
        paddingLeft:"5px"
}

function CheckoutForm(){


    return(
        <form style={boxStyle} >
            <input type="text" placeholder="Nombre" style={inputStyle} id="nombre"/>
            <input type="text" placeholder="Apellido" style={inputStyle} id="apellido"/>
            <input type="text" placeholder="Email" style={inputStyle} id="email"/>
            <input type="text" placeholder="Telefono" style={inputStyle} id="telefono"/>
            <Button variant="contained">Finalizar Compra</Button>
        </form>

    );
}

export default CheckoutForm;