import React, { useContext } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";
import MenuButton from "./MenuButton";
import { useTheme } from "@mui/material";
import { navLinks } from "../Utils/Utils";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks";
import { context } from "../../CustomProvider";
import { SignOutUser } from "../Firebase/Firestore";
function NavBar(){
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const valordelContexto = useContext(context);
    const {Usuario,setUser} = valordelContexto;

    function handleClick(){
        SignOutUser();
        setUser({});
    }


    return(
        <nav className="navBar">
            <div className="gridItem-auth">
                <Typography className="user-auth" variant="subtitle1">Usuario registrado: {Usuario.displayName}</Typography>
                <Button className="button-auth" component={Link} to="singup" variant="outlined" startIcon={<AccountCircleIcon />} >SingUp</Button>
                <Button className="button-auth"  variant="outlined" startIcon={<AccountCircleIcon />} onClick={handleClick}>SignOut</Button>
                <Button className="button-auth"  variant="outlined" startIcon={<AccountCircleIcon />} component={Link} to="/signin">SignIn</Button>
            </div>
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
