import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate, useLocation } from "react-router-dom";

// Import the profile image
import profileImage from "../assets/Shrinivasprofile.jpg"; // Ensure this path is correct

const Navbar = ({ toggleTheme, darkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation(); // Get current page

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: darkMode ? "#121212" : "#fff",
        boxShadow: "none",
        borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo (Profile Image + Name) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundImage: `url(${profileImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "2px solid #fff",
              mr: 1.5,
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: darkMode ? "#fff" : "#333" }}
          >
            Shrinivas Sutar
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Typography
                  key={item.name}
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    color: isActive ? (darkMode ? "#FFD700" : "#1976D2") : darkMode ? "#fff" : "#333",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    "&:hover": { color: darkMode ? "#bbb" : "#555" },
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
        )}

        {/* Theme Toggle & Mobile Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={toggleTheme} sx={{ color: darkMode ? "#fff" : "#333" }}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {isMobile && (
            <IconButton edge="end" onClick={handleDrawerToggle} sx={{ color: darkMode ? "#fff" : "#333" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "60%",
            background: darkMode ? "#121212" : "#fff",
            color: darkMode ? "#fff" : "#333",
          },
        }}
      >
        <List>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    handleDrawerToggle();
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      textAlign: "center",
                      color: isActive ? (darkMode ? "#FFD700" : "#1976D2") : darkMode ? "#fff" : "#333",
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: isActive ? "underline" : "none",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
