import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/Shrinivasprofile.jpg";

// Styled Components
const Background = styled(Box)({
  backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
});

const Overlay = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "50px",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "900px",
  animation: "fadeIn 1.5s ease-in-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});

const ProfileImage = styled(Box)({
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  border: "5px solid #fff",
  backgroundImage: `url(${profileImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
  },
});

// Typing Effect Hook
const useTypingEffect = (text, speed) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(interval);
    }
  }, [index, text, speed]);

  return displayText;
};


const Home = () => {
  const navigate = useNavigate();
  const typingText = useTypingEffect(
    "Passionate Developer | Creative Thinker | Problem Solver",
    50
  );

  return (
    <Background>
      <Overlay>
        {/* Profile Image */}
        <ProfileImage />

        {/* Right Section - Text & CTA */}
        <Box sx={{ flex: "2", textAlign: "left", ml: 4 }}>
          <Typography variant="h3" fontWeight="bold">
            Hi, I'm <span style={{ color: "#FFD700" }}>Shrinivas Sutar</span>
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, color: "#ddd", minHeight: "30px" }}>
            {typingText}
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            sx={{
              mt: 4,
              px: 4,
              py: 1,
              fontSize: "1.2rem",
              borderRadius: "20px",
              textTransform: "none",
              background: "linear-gradient(45deg, #ff9800, #ff5722)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(45deg, #ff5722, #ff9800)",
              },
            }}
            onClick={() => navigate("/projects")}
          >
            View My Work 🚀
          </Button>
        </Box>
      </Overlay>
    </Background>
  );
};

export default Home;
