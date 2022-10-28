import React from "react";
import { Grid } from "@mui/material";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";

const navLinks=[
        {titulo:"Cortantes",
         url: "/Cortantes",
         id:1
        },
        {titulo:"Sellos Acrílicos",
         url:"/Sellos",
         id: 2
         },
        {titulo:"Moldes de silicona",
         url:"/Moldes",
         id:3
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
