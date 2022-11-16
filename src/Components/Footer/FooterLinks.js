import React from "react";
import { useTheme } from "@mui/material";
import {Link} from "react-router-dom";
import {Link as Links} from "@mui/material";

function FooterLinks({href,title,icon=null}){

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    const linkStyle={
        margin: {lg:"10px", md:"0", xs:"0"},
        height:"20px",
        padding: {md:"0 10px", xs:"0 5px"},
        color: secondary,
        "&:hover":{color: primary}
        };
    const containerStyle={display:"flex",justifyContent:"flex-start",alignItems:"center"};


    return(
            <>
            <div style={containerStyle}>
            {icon && <div style={{color: secondary}}>{icon}</div>}
            <Links sx={linkStyle} component={Link} to={href} underline="none" variant="body1">{title}</Links>   
            </div>
            </>
    );
}

export default FooterLinks;
