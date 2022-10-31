import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/roboto";
import { grey } from "@mui/material/colors";
import {Route,Routes} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";


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

function App(){


    return (
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                <NavBar />
                <Routes>
                    <Route path="/" element=<ItemListContainer />/>
                    <Route path="/Categorias/:id" element= <ItemListContainer /> />
                    <Route path="/Item/:id" element=<ItemDetailContainer /> />
                    <Route path="/Carrito" element= <p>Carrito</p> />
                    <Route path="/*" element=<p>Ruta no encontrada</p> />
                </Routes>  
            </ThemeProvider>
        </BrowserRouter>
    );

}

export default App;