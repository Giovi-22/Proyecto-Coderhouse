import React from "react";
import {Avatar} from "@mui/material";

const urlLogo=process.env.PUBLIC_URL + "/Images/LogoCB-SR.svg";
const avatarStyle={
    marginLeft: "20px",
    width: "75px",
    height: "75px",
}

function BrandLogo(){

    return(
        <Avatar  sx={avatarStyle} src={urlLogo} alt="CB3Design shop" ></Avatar>
        );
}

export default BrandLogo;