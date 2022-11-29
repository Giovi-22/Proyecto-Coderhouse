import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

 function SnackbarDialog({open,setClose,message,time=2000}) {

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setClose(false);
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
        open={open}
        autoHideDuration={time}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}

export default SnackbarDialog;