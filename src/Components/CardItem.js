import React from "react";
import { Card,CardContent} from '@mui/material';
import {Typography} from "@mui/material";

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

function CardItem({greeting}){
    
    return(
        
            <Card sx={cardStyle} variant="outlined">
                <CardContent>
                    <Typography variant="subtitle2"  sx={{margin:"10px 0", fontStyle:"italic"}}>{greeting}</Typography>
                </CardContent>              
            </Card>
        
    );
};

export default CardItem;