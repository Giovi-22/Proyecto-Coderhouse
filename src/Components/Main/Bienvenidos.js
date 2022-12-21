import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const boxStyle={
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems:"center",
    width:{xs:"200px",md:"auto"},
    height:"200px",
    margin:{xs:0,md:"50px 150px 0 0"}
}

function Bienvenidos(){
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(sm);
    return(

            <Box className="bienvenidos">
                <Box sx={boxStyle}>
                    <Typography color="secondary" variant={sm ? "subtitle1" : "h5"}>BIENVENIDOS</Typography>
                    <Typography color="secondary" variant={sm ? "h3" : "h1"}>CB3DESIGN</Typography>
                    <Typography color="secondary" align="center" variant={sm ? "subtitle1" : "h5"}>Venta de accesorios para repostería</Typography>
                </Box>
            </Box>

    );
}

export default Bienvenidos;