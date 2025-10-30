import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";

// Contributors — classmates who supported financially
const contributors = [
  {
    name: "Isaac Opara",
    role: "Supporter",
    quote: "Believed in the vision and contributed to making it a reality.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Bill Johnson",
    role: "Supporter",
    quote: "Invested in something meaningful — education through tech.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Saliu Shephiat",
    role: "Supporter",
    quote: "Helped fund the project’s foundation stage.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Edwin Chinenye",
    role: "Supporter",
    quote: "Helped fund the project’s foundation stage.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Joseph Miracle",
    role: "Supporter",
    quote: "Helped fund the project’s foundation stage.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Dalhatu Usman",
    role: "Supporter",
    quote: "Helped fund the project’s foundation stage.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Agaba Emmanuel",
    role: "Supporter",
    quote: "Helped fund the project’s foundation stage.",
    image: "https://via.placeholder.com/120",
  },
 {
    name: "Okonkwo Favour",
    role: "Supporter",
    quote: "Helped fund the project’s foundation stage.",
    image: "https://via.placeholder.com/120",
  },

 
];

export default function About() {
  return (
    <Box
      sx={{
        mt: { xs: 10, md: 10 },
        mb: { xs: 14, md: 10 },
        py: 6,
        background: "linear-gradient(to bottom right, #f8fbff, #eef2ff)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Project Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          sx={{
            color: "#283593",
            fontSize: { xs: "1.8rem", sm: "2.3rem" },
            mb: 2,
          }}
        >
          About This Project
        </Typography>

        {/* Main Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#444",
            mb: 5,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          The <b>Amortization Project</b> was created as an application of the
          topic Amortization in Mathematics.This entire system was{" "}
          <b>coded and designed by Ziko Technologies</b>, inspired by the vision
          to solve real academic challenges with technology.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#444",
            mb: 6,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          However, this project would not have been possible without the
          <b> financial support and belief</b> of amazing classmates who
          contributed funds to help the dream become reality.
        </Typography>

        {/* Contributors Section */}
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{
            mb: 4,
            color: "#1e61fdff",
            fontSize: { xs: "1.3rem", sm: "1.7rem" },
          }}
        >
          Contributors & Supporters
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {contributors.map((person, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: "22px",
                  p: 2,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                  },
                  width: "400px", // ✅ allow the card to take full grid width
                  maxWidth: { xs: "100%", sm: 450, md: 450, lg: 500 }, // ✅ responsive limit
                  mx: "auto", // ✅ center each card
                }}
              >
                <CardContent>
                  <Avatar
                    src={person.image}
                    alt={person.name}
                    sx={{
                      width: 90,
                      height: 90,
                      mx: "auto",
                      mb: 2,
                      border: "3px solid #1e61fdff",
                    }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      color: "#283593",
                    }}
                  >
                    {person.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#616161", mb: 1 }}
                  >
                    {person.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#424242",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    }}
                  >
                    “{person.quote}”
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


