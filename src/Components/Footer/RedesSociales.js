import React from "react";
import {IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const iconStyle={
        backgroundColor:"#e67070",
        color:"white",
        width:"40px",
        height:"40px",
        margin: "0 3px",
        "&:hover":{color:"#e67070",backgroundColor:"white"}
                }
function RedesSociales(){

    return(
        <>
        <IconButton sx={iconStyle} >
        <FacebookIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
        <WhatsAppIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
        <InstagramIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
        <PinterestIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
        <TwitterIcon />
        </IconButton>
        </>

    );
}

export default RedesSociales;