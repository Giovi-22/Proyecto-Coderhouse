import React, { useContext, useState } from "react";
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from "@mui/material";
import { context } from "../../../CustomProvider";


const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid",
    borderColor: "#ffa19e",
    boxShadow: 24,
    p: 4,
  };

function FinishModal({enabled=false,close,redirect}){
    const [open, setOpen] = useState(enabled);
    const valorDelContexto = useContext(context);
    const {saleId,setSaleId} = valorDelContexto;

    function handleClose(){
        close();
        setOpen(false);
        setSaleId("");
        redirect();
    }
    return(
        
        <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700,
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <Typography  variant="h6" component="h2">
              Gracias por tu compra!
            </Typography>
            <Typography sx={{ mt: 2 }}>
             El número de identificación de su compra es: {saleId === "" ? <CircularProgress /> : saleId} 
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
}

export default FinishModal;