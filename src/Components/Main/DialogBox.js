import React,{ useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Modal} from "@mui/material";
import { Navigate } from "react-router-dom";

const style = {
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

function DialogBox({titulo="",descripcion="",abrir=false}) {
        const [open, setOpen] = useState(abrir);

        function handleClose(){
          setOpen(false);
        }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {titulo}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            {descripcion}
          </Typography>
        </Box>
      </Modal>
      {!open && <Navigate to="/productos" />}
    </div>
  );
}

export default DialogBox;