import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const avatarStyle={
        width:"30px",
        height:"30px",
        backgroundColor:"#e67070",
}
function UserAccount({userAvatar,logoutUser}){
    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);

    function handleClick(event){
            setAnchorE1(event.currentTarget);
    }
    function handleClose(){
        setAnchorE1(null);         
    }
    function handleLogout(){
        logoutUser();
        setAnchorE1(null);         
    }
    

    return(
        <Box>
                <Tooltip title="Usuario">
                        <IconButton onClick={handleClick} color="primary">
                                <Avatar sx={avatarStyle} alt="User image" src={userAvatar} />
                        </IconButton>
                </Tooltip>
                <Menu
                        open={open}
                        anchorEl={anchorE1}
                        onClose={handleClose}
                >
                <MenuItem  component={Link} to="/compras" onClick={handleClose}>Mis Compras</MenuItem>
                <MenuItem  component={Link} to="/wishlist" onClick={handleClose} >Favoritos</MenuItem>
                <MenuItem  onClick={handleLogout} >Salir</MenuItem>
                </Menu>
        </Box>

    );
}

export default UserAccount;