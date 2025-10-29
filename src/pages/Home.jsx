import React from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import Logo from "../assets/brand1.png";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1565c0 0%, #1e88e5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        p: 3,
      }}
    >
      <Container
        maxWidth="md"
        sx={{ mb: { xs: 10, md: 0 }, mt: { xs: 15, md: 0 } }}
      >
        <Stack spacing={3} alignItems="center" justifyContent={"center"}>
          <img
            src={Logo}
            alt="Shinelight School Logo"
            style={{ height: "80px" }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              textShadow: "0 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Flora Home International School
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
            }}
          >
            Manage, calculate, and visualize school fee amortization — built for
            simplicity and accuracy.
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/calculator"
            sx={{
              mt: 2,
              backgroundColor: "#fbc02d",
              color: "#1565c0",
              px: 4,
              py: 1.3,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: 8,
              "&:hover": {
                backgroundColor: "#fff176",
              },
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
