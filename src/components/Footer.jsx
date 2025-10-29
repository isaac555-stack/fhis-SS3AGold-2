import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd",
        zIndex: 1000,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
      >
        © {new Date().getFullYear()} FloraHome International School | Built by{" "}
        <b>SS3A Gold (Group Two)</b>
      </Typography>
    </Box>
  );
}
