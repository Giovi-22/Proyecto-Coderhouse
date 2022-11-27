import React, { useContext, useEffect, useState } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";
import MenuButton from "./MenuButton";
import { useTheme } from "@mui/material";
import { addWishlistToCollection, navLinks } from "../Utils/Utils";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks";
import { context } from "../../CustomProvider";
import { SignOutUser } from "../Firebase/Firestore";
import SnackbarDialog from "../Main/SnackbarDialog";


function NavBar(){
    const [cerrar,setCerrar] = useState(false);
    const [isSnackbar, setSnackbar] = useState({state:false,userid:""});
    const [user,setUsuario] = useState({email: "",name:"",id:""});
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const valordelContexto = useContext(context);
    const {Usuario,setUser,Logged,setIslogged,vaciarWishlist,wishList} = valordelContexto;

    function handleClick(){
        
        setUsuario({
            email: Usuario.email,
            name: Usuario.displayName,
            id:Usuario.uid
        });
        console.log("salir");
        setCerrar(true);      
    }
    function handleAbrir(){
        setSnackbar({state:false,userid:""});
    }
    useEffect(()=>{
            if(cerrar && wishList.length !== 0){
                    addWishlistToCollection({user,wishList})
                    .then(result=>{
                        console.log(result);
                        SignOutUser();
                        setCerrar(false);
                        setIslogged(false);
                        vaciarWishlist();
                        setUser({});
                        console.log(result.uid)
                        setSnackbar({state:true,mensaje:`Wishlist archivada con el siguiente id ${result.id}`});
                    })
                    .catch(() => {
                        setSnackbar({state:true,mensaje:"Se ha producido un error al intentar guardar la wishlist"});
                    });

            }else{
                        SignOutUser();
                        setCerrar(false);
                        setIslogged(false);
                        vaciarWishlist();
                        setUser({});
            }
            
    },[cerrar])

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
        <SnackbarDialog abrir={isSnackbar.state} setAbrir={handleAbrir} mensaje={isSnackbar.mensaje} />
        </> 
            );
}

export default NavBar;
