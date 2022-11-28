import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

 function SnackbarDialog({abrir,setAbrir,mensaje,tiempo=2000}) {

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAbrir(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        open={abrir}
        autoHideDuration={tiempo}
        onClose={handleClose}
        message={mensaje}
        action={action}
      />
    </div>
  );
}

export default SnackbarDialog;