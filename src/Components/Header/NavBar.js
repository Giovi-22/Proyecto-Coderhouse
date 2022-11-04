import React from "react";
import {Paper, useMediaQuery } from "@mui/material";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";
import MenuButton from "./MenuButton";
import {useTheme} from "@mui/material";

const navLinks=[
        {titulo:"Bienvenidos",
         url: "/",
         id:1
        },
        {titulo:"Productos",
         url: "/Productos",
         id:5
        },
        {titulo:"Cortantes",
         url: "/Categorias/Cortantes",
         id:2
        },
        {titulo:"Sellos Acrílicos",
         url:"/Categorias/Sellos",
         id:3
         },
        {titulo:"Moldes de silicona",
         url:"/Categorias/Moldes",
         id:4
         }
        ];
function NavBar(){
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Paper elevation={2} className="navBar">
            <div className="gridItem-logo">
                <BrandLogo />
            </div>
            <div className="gridItem-navlinks">
                {matchesSm ? 
                <MenuButton menuItems={navLinks}/> 
                : 
                navLinks.map((value)=>(
                    <NavLinks 
                        title={value.titulo}
                        href={value.url}
                        key={value.id}
                    />))
                }   
            </div>
            <div className="gridItem-cartWidget">
                <CartWidget />
            </div>
        </Paper>
            );
}

export default NavBar;
