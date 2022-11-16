import React from "react";
import {useMediaQuery } from "@mui/material";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";
import MenuButton from "./MenuButton";
import {useTheme} from "@mui/material";
import {navLinks} from "../Utils/Utils";

function NavBar(){
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <nav className="navBar">
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
        </nav>
            );
}

export default NavBar;
