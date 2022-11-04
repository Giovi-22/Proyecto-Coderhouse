import React, {useState} from "react";
import {Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";

function MenuButton({menuItems}) {
        const [anchorE1, setAnchorE1] = useState(null);
        const open = Boolean(anchorE1);

        function handleClick(event){
                setAnchorE1(event.currentTarget);
        }
        function handleClose(){
                setAnchorE1(null);
        }
  
    return (
      <div>
                <IconButton onClick={handleClick}>
                        <MenuIcon />
                </IconButton>
                <Menu
                        open={open}
                        anchorEl={anchorE1}
                        onClose={handleClose}
                >
                        {menuItems.map((value)=> <MenuItem component={Link} key={value.id} onClick={handleClose} to={value.url}>{value.titulo}</MenuItem>)}
                </Menu>
      </div>
    );
  }

export default MenuButton;
  