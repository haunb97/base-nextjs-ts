import React, { ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";
import { Flip, ToastContainer } from "react-toastify";
import { Box } from "@mui/material";

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "white",
        color: "black",
      }}
    >
      <Header />
      <div>{children}</div>
      <Footer />
      <ToastContainer theme="colored" hideProgressBar transition={Flip} />
    </Box>
  );
}
