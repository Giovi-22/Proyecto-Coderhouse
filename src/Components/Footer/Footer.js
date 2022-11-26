import React from "react";
import { Typography } from "@mui/material";
import {navLinks, socialLinks} from "../Utils/Utils";
import RedesSociales from "./RedesSociales";
import NavLinks from "../NavLinks";



function Footer(){

    return (
            <footer className="containerFooter">
                   <div className="footerLinks">
                        {navLinks.map((value)=><NavLinks key={value.id} href={value.url} title={value.titulo} type="type2" />)}
                   </div>
                   <div className="footerContact">
                        {socialLinks.map((value)=><NavLinks key={value.id} href={value.url} icon={value.icon}  title={value.titulo} type="type3" />)}
                   </div>
                   <Typography className="copyright" color="white" align="center" variant="body1" >Copyright © 2022 | CB3DESIGN | Creado por Giovi</Typography>
            </footer>

    );
}


export default Footer;