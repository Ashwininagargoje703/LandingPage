import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Bg from "/assets/herobg.png";
import Bg2 from "/assets/herobg2.png";
import { Body } from "../comman/Headings";

// Styled component for the hero section
const HeroSection = styled(Box)(({ theme }) => ({
  height: "90vh",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  zIndex: 2,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -2,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Bg2})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    zIndex: -1,
    backgroundRepeat: "repeat-y",
  },
}));

// Styled component for the overlay
const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  zIndex: -1,
}));

// Styled button with custom styles
const ExploreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  backgroundColor: "#673ab7",
  fill: "linear-gradient(0deg, rgba(134, 73, 242, 0.60) 0%, #4E2A8C 100%)",
  strokeWidth: "1px",
  stroke: "#DAC8FF",
  filter: "drop-shadow(0px 4px 24px #8649F2)",
  "&:hover": {
    backgroundColor: "#512da8",
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Box sx={{ position: "relative", zIndex: 3, }}>
        <h1 className="hero-heading" style={{padding:"1rem" }}>Decentralized Social Gaming Hub</h1>
        <Body>
          Connect, Invite, Challenge & Earn as you play, host, and develop.
        </Body>
        <ExploreButton variant="contained">Explore More</ExploreButton>
      </Box>
    </HeroSection>
  );
};

export default Hero;
