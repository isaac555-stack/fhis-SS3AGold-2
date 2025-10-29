// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0", // school blue
    },
    secondary: {
      main: "#fbc02d", // gold accent
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "10px 24px",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
