import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import Logo from "../assets/brand1.png";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorElNav, setAnchorNav] = useState(null);
  const pages = [
    { name: "Home", path: "/" },
    { name: "Calculator", path: "/calculator" },
    { name: "About", path: "/about" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0047AB", py: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={Logo}
          alt="Shinelight School Logo"
          style={{ height: "45px", marginRight: "10px" }}
        />
        <Typography
          variant="subtitle2"
          component={Link}
          to="/"
          color="inherit"
          sx={{
            display: { xs: "flex", md: "none" },
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Flora Home Int'l School
        </Typography>

        <Typography
          variant="h6"
          component={Link}
          to="/"
          color="inherit"
          sx={{
            display: { xs: "none", md: "flex" },
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Flora Home International School
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <NavLink
                  to={page.path}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#1e61fdff" : "inherit",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/calculator">
              Calculator
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

