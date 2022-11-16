import React, { useContext } from "react";
import {IconButton,Badge} from "@mui/material/";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"
import {context} from "../../CustomProvider";


function CartWidget(){
    const valorDelContexto = useContext(context);

    return(
        <IconButton LinkComponent={Link} to="/Carrito">
            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={valorDelContexto.cuantity} 
                color="primary">
                <AddShoppingCartIcon ></AddShoppingCartIcon>
            </Badge>
        </IconButton>
    );
}

export default CartWidget;