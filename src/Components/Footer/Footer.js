import React from "react";
import FooterLinks from "./FooterLinks";
import { Typography } from "@mui/material";
import {navLinks, socialLinks} from "../Utils/Utils";
import RedesSociales from "./RedesSociales";




function Footer(){

    return (
            <footer className="containerFooter">
                   <div className="footerLinks">
                        {navLinks.map((value)=><FooterLinks href={value.url} title={value.titulo} />)}
                   </div>
                   <div className="footerRedes">
                            <RedesSociales />
                   </div>
                   <div className="footerContact">
                        {socialLinks.map((value)=><FooterLinks key={value.id} href={value.url} icon={value.icon} title={value.titulo} />)}
                   </div>
                   <Typography className="copyright" color="white" align="center" variant="body1" >Copyright © 2022 | CB3DESIGN | Creado por Giovi</Typography>
            </footer>

    );
}


export default Footer;