import React, { useContext, useEffect, useState } from "react";
import { context } from "../../CustomProvider";
import SnackbarDialog from "../Main/SnackbarDialog";
import { addWishlistToCollection } from "../Utils/Utils";
import { getUserWishlist, SignOutUser, updateWishlistProduct } from "./Firestore";


function SignOut({user,close}){
    const [snackBar,setSnackbar] = useState({state:false,error:false,message:"",time:1000});
    const valordelContexto = useContext(context);
    const {setUser,setIslogged,vaciarWishlist,wishList,vaciarCompras} = valordelContexto;
    

    function handleClose(){
        if(snackBar.error === false){
            setIslogged(false);
            setUser({});
            vaciarWishlist();
            vaciarCompras();
            setSnackbar((prevValue)=>({...prevValue,state:false}));
            close();
        }
    }


useEffect(()=>{
    if(wishList.length !== 0){
        getUserWishlist(user.id)
        .then(docs=>{
            const wishlistId= docs.docs[0].id;
            if(docs.empty){
                addWishlistToCollection({user,wishList})
                .then(result=>{
                    SignOutUser();
                    setSnackbar({state:true, error:false, message:`Wishlist archivada con el siguiente id ${result.id}`,time:1000});   
                })
                .catch(() => {
                    setSnackbar({state:true, error:true, message:"Se ha producido un error al intentar guardar la wishlist",time:2000});
                })
            }else{
                updateWishlistProduct(wishlistId,wishList)
                .then(()=>{
                    SignOutUser();
                    setSnackbar({state:true, error:false, message:"La sesión ha finalizado",time:2000});
                })
                .catch(() => {
                    setSnackbar({state:true, error:true, message:"Se ha producido un error al intentar actualizar la wishlist",time:2000});
                })
            }})
        .catch(error=>setSnackbar({state:true,error:true,message:error.message,time:3000}));

}else{
            SignOutUser();
            setSnackbar({state:true, error:false, message:"La sesión ha finalizado",time:1000});
}

},[])


    return(
            <>
                <SnackbarDialog open={snackBar.state} setClose={handleClose} message={snackBar.message} time={snackBar.time} />
            </>
            
    );
}

export default SignOut;