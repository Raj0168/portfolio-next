"use client";

import { RootState } from "@/store";
import { hideSnackbar } from "@/store/slices/snackbarSlice";
import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const GlobalSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state: RootState) => state.snackbar
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(hideSnackbar())}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => dispatch(hideSnackbar())}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;

