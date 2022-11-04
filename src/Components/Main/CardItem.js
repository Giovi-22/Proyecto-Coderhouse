import React from "react";
import { Card,CardContent,CardActions} from '@mui/material';
import {Typography} from "@mui/material";
import { Link } from "react-router-dom";
import {Divider} from "@mui/material";
import {Button} from "@mui/material";

const cardStyle={
width: "250px",
height: "400px",
display: "flex",
justifyContent: "center",
alignItems: "center",
flexDirection: "column",
boxSizing: "border-box",
"&:hover":{boxShadow:"1px 1px 3px 2px #efefef, -1px -1px 2px 1px #efefef"}
}

function CardItem({products}){
    
    return(
        
        <Card sx={cardStyle} variant="outlined">
                <img 
                src= {products.image}
                style={{marginBottom:"15px", width:"150px",height:"150px"}}
                alt="Imagen de producto"
                />

                <Divider 
                    variant="middle" 
                    sx={{marginBottom:"10px", width:"90%"}}
                />
            <CardContent sx={{textAlign:"center"}}>
                <Typography color="inherit" variant="h6" >{products.name}</Typography>
                <Typography variant="subtitle1" sx={{margin:"10px 0", color:"#76d275"}}>En Stock</Typography>
            </CardContent>
            <CardActions sx={{width:"100%",marginTop:"auto"}}>
                <Button color="primary" variant="outlined" sx={{margin:"0 auto", width:"90%"}} component={Link} to={"/Item/"+ products.id}>Ver detalles</Button>
            </CardActions>
        </Card>
        
    );
};


export default CardItem;