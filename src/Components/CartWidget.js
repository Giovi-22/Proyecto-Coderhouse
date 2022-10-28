import React from "react";
import {IconButton,Badge} from "@mui/material/";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function CartWidget(){

    return(
        <IconButton >
            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={3} 
                color="primary">
                <AddShoppingCartIcon ></AddShoppingCartIcon>
            </Badge>
        </IconButton>
    );
}

export default CartWidget;