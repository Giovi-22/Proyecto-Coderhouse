import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";
import MenuButton from "./MenuButton";
import { useTheme } from "@mui/material";
import { navLinks } from "../Utils/Utils";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks";


function NavBar(){
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <nav className="navBar">
                <Button className="gridItem-singup" component={Link} to="singup" variant="outlined" startIcon={<AccountCircleIcon />} >SingUp</Button>
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
                        type="type1"
                        />
                    ))
                }   
            </div>
            
            <div className="gridItem-cartWidget">
                <CartWidget />
            </div>
        </nav>
            );
}

export default NavBar;
