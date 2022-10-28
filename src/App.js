import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/roboto";
import { grey } from "@mui/material/colors";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { useParams } from "react-router-dom";
const theme = createTheme({
    palette:{
        primary:{
            main: "#e67070",
            light: "#ffa19e",
            dark:"#b04045"
                },
        text:{
            primary:grey[700],
            secondary: "#fff"
                },
        background:{
            custom: "#e67070"   
                }

            },
    typography:{
        fontFamily: "roboto"
                }
});

const greeting = "Este producto está a la venta";
function App(){
   let cat = useParams();

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                <NavBar />
                <Routes>
                    <Route path="/" element=<ItemListContainer greeting={greeting}/>/>
                    <Route path="/Categorias/Cortantes" element= <ItemListContainer greeting="Cortantes" /> />
                    <Route path="/Categorias/Sellos" element= <ItemListContainer greeting="Sellos" /> />
                    <Route path="/Categorias/Moldes" element= <ItemListContainer greeting="Moldes" /> />
                    <Route path="/Carrito" element= <p>Carrito</p> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes>  
            </ThemeProvider>
        </BrowserRouter>
    );

}

export default App;