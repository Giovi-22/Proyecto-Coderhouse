import React, { useContext, useState } from "react";
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
import SignOut from "../Firebase/SignOut";



function NavBar(){
    const [isSignout,setSignout] = useState(false);
    const [user,setUser] = useState({email: "",name:"",id:""});
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const valordelContexto = useContext(context);
    const {Usuario,Logged} = valordelContexto;

    function handleClick(){
        setUser({email: Usuario.email,name: Usuario.displayName,id:Usuario.uid});
        setSignout(true);
    }
    function handleClose(){
        setSignout(false);
    }

    return(
        <>
        <nav className="navBar">
            <div className="gridItem-auth">
                <div className="user-auth">
                {Logged && <Typography variant="subtitle1">Usuario: {Usuario.email}</Typography>}
                </div>
                {Logged && <Button className="button-auth"  variant="outlined" startIcon={<AccountCircleIcon />} onClick={handleClick}>salir</Button>}
                {!Logged && <Button className="button-auth"  variant="outlined" startIcon={<AccountCircleIcon />} component={Link} to="/signin">ingresar</Button>}
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
                {Logged && <NavLinks
                        title="wishlist"
                        href="/wishlist"
                        type="type1"
                        />}
            </div>
            
            <div className="gridItem-cartWidget">
                <CartWidget />
            </div>
        </nav>
        {isSignout && <SignOut user={user} close={handleClose}/>}
        </> 
            );
}

export default NavBar;
