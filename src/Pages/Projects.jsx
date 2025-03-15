import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import mytheresaSS from "../assets/mytheresaSS.png";
import languageApp from '../assets/languageTranslation.png';
const projects = [

  {
    title: "Mytheresa Clone: MERN Stack E-commerce Web App",
    image: mytheresaSS, 
    description: "A cutting-edge MERN Stack e-commerce application with smart filtering, secure authentication, and seamless payments.",
    liveDemo: "https://violent-hope-ecomm.netlify.app/"
  },
  {
    title: "Language Translator Web App",
    image: languageApp, 
    description: "This project is about building a web application to translate languages using language translator API from external services like Libre Translate. Here you will be able to translate between multiple languages and whenever you type something it will be automatically translated in the side panel.",
    liveDemo: "https://lovely-alfajores-60a862.netlify.app/"
  }
];




const Projects = () => {
  return (
    <Container>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
                  {project.description}
                </Typography>
                {project.liveDemo && (
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.liveDemo}
                    target="_blank"
                    sx={{ mt: "auto", textTransform: "none" }} 
                  >
                    Live Demo
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
