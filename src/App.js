import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/roboto";
import { grey } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";

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
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                <NavBar />
                <ItemListContainer greeting={greeting}/>
            </ThemeProvider>
        </BrowserRouter>
    );

}

export default App;