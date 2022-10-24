import React from "react";
import { Grid } from "@mui/material";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";

const navLinks=[
        {titulo:"Bienvenidos",
         url: "/Bienvenidos",
         menu: false,
         id:1
        },
        {titulo:"Productos",
         url:"/Productos",
         menu: true,
         id: 2
         },
        {titulo:"Nosotros",
         url:"/Nosotros",
         menu: false,
         id:3
         },
        {titulo:"Cómo comprar",
         url:"/Como-comprar",
         menu: false,
         id:4
         },
        {titulo:"Contacto",
         url:"/Contacto",
         menu: false,
         id:5
         }
        ];
function NavBar(){

        

    return(
        <Grid component="div" container spacing={2} alignItems="center"  >
            <Grid item container lg={2} justifyContent="flex-end" >
                <BrandLogo />
            </Grid>
            <Grid container item lg={9} justifyContent="center">
                <nav style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    {navLinks.map((value)=>(
                        <NavLinks 
                            title={value.titulo}
                            href={value.url}
                            menu = {value.menu}
                            key={value.id}
                        />))
                    }
                </nav>
            </Grid>
            <Grid item md={1} >
                <CartWidget />
            </Grid>
        </Grid>
            );
}

export default NavBar;
