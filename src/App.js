import React from "react";
import NavBar from "./Components/Header/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/roboto";
import { grey } from "@mui/material/colors";
import { BrowserRouter} from "react-router-dom";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import CustomProvider from "./CustomProvider";

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
        secondary:{
            main: "#ffff",
            light: "#ffa19e",
            dark:"#b04045"
                },
        text:{
            primary: grey[700],
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
        <CustomProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme} >
                    <NavBar />
                    <Main />
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </CustomProvider>
    );

}

export default App;