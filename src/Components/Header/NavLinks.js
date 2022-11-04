import React from "react";
import { Button} from "@mui/material";
import { useTheme } from "@mui/material";
import {Link} from "react-router-dom";

function NavLinks({href,title}){

    const theme = useTheme();
    const primaryText = theme.palette.text.primary;
    const defaultBackground = theme.palette.background.default;
    const customBackground = theme.palette.background.custom;


    const linkStyle={
        margin: {lg:"0 20px", md:"0 10px", xs:"0"},
        height:"40px",
        borderStyle:"none",
        borderRadius:"5px",
        padding: {md:"0 10px", xs:"0 5px"},
        color: primaryText,
        backgroundColor: defaultBackground,
        "&:hover":{backgroundColor: customBackground,color:"white",borderStyle:"none"}
        };

    return(
            <>
              <Button sx={linkStyle} component={Link} to={href} variant="text">{title}</Button>   
            </>
    );
}

export default NavLinks;
