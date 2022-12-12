import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {navLinks, socialLinks} from "../Utils/Utils";
import NavLinks from "../NavLinks";



function Footer(){
     const theme = useTheme();
     let isSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
            <footer className="containerFooter">
                   <div className="footerLinks">
                        {navLinks.map((value,index)=><NavLinks key={`${value.id}${index}`} id={value.id} href={value.url} title={value.titulo} type="type2" />)}
                   </div>
                  {isSm ? null :  <div className="footerContact">
                        {socialLinks.map((value,index)=><NavLinks key={`${value.id}${index}`} id={value.id} href={value.url} icon={value.icon}  title={value.titulo} type="type3" />)}
                   </div>}
                   <Typography className="copyright" color="white" align="center" variant="body1" >Copyright © 2022 | CB3DESIGN | Creado por Giovi</Typography>
            </footer>

    );
}


export default Footer;