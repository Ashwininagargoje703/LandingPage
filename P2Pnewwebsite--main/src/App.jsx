import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header";
import Ecosystem from "./components/Ecosystem";
import PoweredBySection from "./components/PowerdBy";
import WhyPeer2Play from "./components/WhyPeer";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import Bg from "/assets/Faqbg.png"; 
import { styled, useTheme } from "@mui/material";
import Hero from "./components/Hero";

const AppContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Ensures the container takes full height
});

const FAQBackground = styled("div")(({ theme }) => ({
  position: "relative",
  height: "571.154px",
  flexShrink: 0,
  backgroundImage: `url(${Bg})`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  strokeWidth: " 3.2px",
  stroke: "rgba(0, 0, 0, 0.00)",
  display: "flex", // Added for centering
  alignItems:"end", // Center contents vertically
}));

function App() {
  const theme = useTheme();

  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <PoweredBySection />
      <WhyPeer2Play />
      <Ecosystem />
      <FAQSection />
      <FAQBackground>
      <Footer />
       
      </FAQBackground>
    </AppContainer>
  );
}

export default App;
