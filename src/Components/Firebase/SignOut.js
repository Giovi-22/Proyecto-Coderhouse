import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { context } from "../../CustomProvider";
import SnackbarDialog from "../Main/SnackbarDialog";
import { addWishlistToCollection } from "../Utils/Utils";
import { SignOutUser } from "./Firestore";


function SignOut({user,close}){
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:2000});
    const [redirect,setRedirect] = useState(false);
    const valordelContexto = useContext(context);
    const {setUser,setIslogged,vaciarWishlist,wishList} = valordelContexto;

    

    function handleClose(){
        if(snackBar.error){
            setRedirect(false);
        }else{
            setIslogged(false);
            setUser({});
            vaciarWishlist();
            setRedirect(true);
            
        }
        close();
        setSnackbar((prevValue)=>({...prevValue,state:false}));
    }


useEffect(()=>{
    if(wishList.length !== 0){
        addWishlistToCollection({user,wishList})
        .then(result=>{
            SignOutUser();
            setSnackbar({state:true, error:false, message:`Wishlist archivada con el siguiente id ${result.id}`,time:2000});
        })
        .catch(() => {
            setSnackbar({state:true, error:true, message:"Se ha producido un error al intentar guardar la wishlist",time:3000});
        });

}else{
            SignOutUser();
            setSnackbar({state:true, error:false, message:"La sesión ha finalizado",time:2000});
}

},[snackBar.state])


    return(
            <>
                <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message} time={snackBar.time} />
                {redirect && <Navigate to="/productos" />}
            </>
            
    );
}

export default SignOut;