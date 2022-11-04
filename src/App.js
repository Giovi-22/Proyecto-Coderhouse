import React, { createContext, useState } from "react";
import NavBar from "./Components/Header/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/roboto";
import { grey } from "@mui/material/colors";
import { BrowserRouter} from "react-router-dom";
import Main from "./Components/Main/Main";

const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:670,
            md:900,
            lg:1200,
            xl:1536
        }
    },
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

const context = createContext();

function App(){
    const [count,setCount] = useState();
    let {Provider} = context;
    Provider = {
        count: count,
        setCount: setCount
    }

    return (
        
            <BrowserRouter>
                <ThemeProvider theme={theme} >
                    <NavBar />
                    <Main />
                </ThemeProvider>
            </BrowserRouter>

    );

}

export default App;