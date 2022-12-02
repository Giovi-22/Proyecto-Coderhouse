import React from "react";
import { Button} from "@mui/material";
import { useTheme } from "@mui/material";
import {Link} from "react-router-dom";
import {Link as Links} from "@mui/material";



function NavLinks({href,title,icon=null,type,id}){
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const primaryText = theme.palette.text.primary;
    const defaultBackground = theme.palette.background.default;
    const customBackground = theme.palette.background.custom;

    const buttonStyle={
        margin: "5px",
        height:"40px",
        borderStyle:"none",
        borderRadius:"5px",
        padding: "5px",
        color: primaryText,
        backgroundColor: defaultBackground,
        "&:hover":{backgroundColor: customBackground,color:"white",borderStyle:"none"}
        };

    const linkStyle={
            padding: "5px",
            color: secondary,
            "&:hover":{color: primary}
            };
    
    const linkType ={
                type1: <Button key={id} sx={buttonStyle} component={Link} to={href} variant="text">{title}</Button>,
                type2: <Links key={id} sx={linkStyle} component={Link} to={href} underline="none" variant="body1">{icon} {title}</Links>,
                type3: <Links key={id} sx={linkStyle}  href={href} underline="none" variant="body1">{icon} {title}</Links>
            }
    return(
            <>
                {linkType[type]}       
            </>
    );
}

export default NavLinks;