import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Notification(props) {
  const { notify, setNotify } = props;

  const handleClose = () => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <div>
      <Snackbar
        open={notify.isOpen}
        autoHideDuration={1200}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: notify.position }}
      >
        <Alert variant="filled" onClose={handleClose} severity={notify.type}>
          {notify.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Notification;