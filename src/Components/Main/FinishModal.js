import React, { useEffect, useState } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";

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

function FinishModal({enabled=false,close}){
    const [open, setOpen] = useState(enabled);
    function handleClose(){
        close();
        setOpen(false);
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
             El número de identificación es: 
             Su compra va a ser enviada a la siguiente dirección: 
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
}

export default FinishModal;