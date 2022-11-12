import React, { createContext, useEffect, useState } from "react";
import NavBar from "./Components/Header/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/roboto";
import { grey } from "@mui/material/colors";
import { BrowserRouter} from "react-router-dom";
import Main from "./Components/Main/Main";
import {addProductToContext} from "./Components/Utils/Utils";

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

export const context = createContext();
const {Provider} = context;

function App(){
    const [count,setCount] = useState(0);
    const [products, setProducts] = useState([]);
  
    function handleProducts(product){
                setProducts([...products,product]); 
    }           
    function handleDelete(productId){
            let array= [];      
            array = products.filter((value)=>value.id !== productId);
            setProducts(array);


    }

    let valorDelContexto = {
                    setProducts: handleProducts,
                    deleteProduct: handleDelete,
                    cuantity:count,
                    products: products
                        };
        
    useEffect(()=>{
        let cuenta = 0;
        products.map((value)=>cuenta = cuenta + value.cantidad)
        setCount(cuenta);
    },[products])

    return (
        <Provider value={valorDelContexto}>
            <BrowserRouter>
                <ThemeProvider theme={theme} >
                    <NavBar />
                    <Main />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );

}

export default App;