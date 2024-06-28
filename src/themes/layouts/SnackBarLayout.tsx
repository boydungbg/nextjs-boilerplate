"use client";
import { IconButton } from "@mui/material";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { FC, ReactNode } from "react";
import { IoClose } from "react-icons/io5";

const SnackbarLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={6000}
      action={(id) => (
        <IconButton onClick={() => closeSnackbar(id)}>
          <IoClose size={24} color="#fff" />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};
export default SnackbarLayout;
