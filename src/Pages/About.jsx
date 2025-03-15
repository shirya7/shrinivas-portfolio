import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import profileImage from "../assets/Shrinivasprofile.jpg";
import xchangeLogo from "../assets/xchange_logo.png";
import byjusLogo from "../assets/tecspeak.jpg";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiPostman, SiDotnet } from "react-icons/si";

const About = () => {
  const theme = useTheme();
  const bgColor = theme.palette.mode === "dark" ? "#121212" : "#fff";
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={5} p={3} borderRadius={3} boxShadow={3} bgcolor={bgColor} color={textColor}>
        {/* Profile Image */}
        <Avatar src={profileImage} sx={{ width: 120, height: 120, margin: "auto", boxShadow: 3 }} />

        {/* Name & Title */}
        <Typography variant="h4" fontWeight="bold" mt={2} color="primary">
          Shrinivas Sutar
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Software Developer 
        </Typography>

        {/* Contact Details */}
        <Box mt={2}>
          <Typography display="flex" alignItems="center" justifyContent="center">
            <EmailIcon sx={{ mr: 1, color: "primary.main" }} />
            <Link href="mailto:shrinivassutar7@gmail.com" underline="hover" color={textColor}>
              shrinivassutar7@gmail.com
            </Link>
          </Typography>

          <Typography display="flex" alignItems="center" justifyContent="center" mt={1}>
            <PhoneIcon sx={{ mr: 1, color: "primary.main" }} /> +91 7038102818
          </Typography>
        </Box>

        {/* Social Links */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Link href="https://www.linkedin.com/in/shrinivas-sutar-878950226/" color={textColor} sx={{ mx: 1, "&:hover": { color: "blue" } }}>
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="" color={textColor} sx={{ mx: 1, "&:hover": { color: "black" } }}>
            <GitHubIcon fontSize="large" />
          </Link>
        </Box>

        {/* Professional Summary */}
        <Typography variant="body1" mt={3} sx={{ color: "text.secondary", lineHeight: 1.6 }}>
          Results-oriented Software Developer with 2+ years of experience in designing and developing
          web applications using React.js and .NET Core. Skilled in full-stack development, database
          management, and collaborating with cross-functional teams to deliver high-quality software solutions.
        </Typography>

        {/* Work Experience Section */}
        <Box mt={4} textAlign="left">
          <Typography variant="h5" fontWeight="bold" color="primary">
            Work Experience
          </Typography>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%", bgcolor: bgColor, color: textColor }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center">
                    <Box component="img" src={xchangeLogo} sx={{ width: 60, height: 40, mr: 2 }} />
                    <Box>
                      <Typography variant="h6">Software Developer</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Xchange Data Technology Pvt. Ltd (Jul 2024 - Present)
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    - Developed and maintained responsive web applications using React.js and ASP.NET. <br />
                    - Integrated RESTful APIs and enhanced system performance by 30%. <br />
                    - Led the migration of legacy applications to .NET Core.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%", bgcolor: bgColor, color: textColor }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center">
                    <Box component="img" src={byjusLogo} sx={{ width: 60, height: 50, mr: 2 }} />
                    <Box>
                      <Typography variant="h6">Associate Software Developer</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Tecspeak IT solution (Jun 2022 - Jun 2024)
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                   - Developed and maintained responsive web applications using React.js and ASP.NET. <br />
                    - Integrated RESTful APIs and enhanced system performance by 30%. <br />
                    - Led the migration of legacy applications to .NET Core.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Education */}
        <Box mt={4} textAlign="left">
          <Typography variant="h5" fontWeight="bold" color="primary">
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Master Of Computer Application - Shivaji University" secondary="2019 - 2022" />
            </ListItem>
          </List>
        </Box>


        <Box mt={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold" color="primary">
            Tech Stack
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            mt={2}
          >
            <FaReact size={40} color="#61DBFB" />
            <SiRedux size={40} color="#764ABC" />
            <SiNextdotjs size={40} color="#000" />
            <FaNodeJs size={40} color="#68A063" />
            <SiExpress size={40} color="#000" />
            <SiMongodb size={40} color="#4DB33D" />
            <FaDatabase size={40} color="#f29111" />
            <FaGitAlt size={40} color="#F1502F" />
            <SiPostman size={40} color="#FF6C37" />
            <SiDotnet size={40} color="#512BD4" />
          </Box>
        </Box>
      
      </Box>
    </Container>
  );
};

export default About;
