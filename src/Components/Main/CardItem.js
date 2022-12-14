import React from "react";
import { Card,CardContent,CardActions } from '@mui/material';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import  {Divider} from "@mui/material";
import { Button } from "@mui/material";
import WhisIcon from "./WishList/WhisIcon";

const cardStyle={
width: "250px",
height: "400px",
display: "flex",
justifyContent: "center",
alignItems: "center",
flexDirection: "column",
boxSizing: "border-box",
borderStyle: "solid",
borderRadius: "15px",
borderWidth: "5px",
borderColor: "#e6707063",
"&:hover":{boxShadow:"1px 1px 6px 1px #e6707063, -1px -1px 6px 1px #e6707063"}

}

function CardItem({products,isLogged}){
    
    return(
        
        <Card sx={cardStyle} variant="outlined">
                <img 
                src= {process.env.PUBLIC_URL + products.image}
                className="card-image"
                />

                <Divider 
                    variant="middle" 
                    sx={{marginBottom:"10px", width:"90%"}}
                />
            <CardContent sx={{textAlign:"center"}}>
                <Typography color="inherit" variant="h6" >{products.name}</Typography>
                <Typography variant="subtitle1" color="#76d275">En Stock</Typography>
                {isLogged && <WhisIcon product={products}/>}
            </CardContent>
            <CardActions sx={{width:"100%",marginTop:"auto"}}>
                <Button color="primary" variant="outlined" sx={{margin:"0 auto", width:"90%"}} component={Link} to={"/item/"+ products.id}>Ver detalles</Button>
            </CardActions>
        </Card>
        
    );
};


export default CardItem;

/*
{boxShadow:"1px 1px 3px 2px #efefef, -1px -1px 2px 1px #efefef"}
*/