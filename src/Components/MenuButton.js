import React, {useState} from "react";
import {Menu, MenuItem,Button} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function MenuButton({menuStyle, title,  menuItems}) {
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
            <Button
            sx={menuStyle}
            onClick={handleClick}
            endIcon= {<ArrowDropDownIcon />}
            >
            {title}
            </Button>
            <Menu
            open={open}
            anchorEl={anchorE1}
            onClose={handleClose}
            >
            {menuItems.map((value)=> <MenuItem onClick={handleClose}>{value}</MenuItem>)}
            </Menu>
      </div>
    );
  }

export default MenuButton;
  