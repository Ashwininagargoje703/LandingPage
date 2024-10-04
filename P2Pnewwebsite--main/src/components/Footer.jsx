import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { fontWeight, styled, useMediaQuery, useTheme } from "@mui/system";
import Bg from "/assets/Footer.png";
import Bg2 from "/assets/Faqbg.png";
import Logo from "/assets/footlogo.png";
import { Body2, H4 } from "../comman/Headings";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: " 1rem",
  color: "#fff",
  position: "relative",
  bottom: 0,
  height: "23rem",
  width: "100%",
  display: "flex", // Added for centering
  justifyContent: "center", // Center contents horizontally
  alignItems: "center", // Center contents vertically
  textAlign: "center", // Center text
}));

const LinkGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const EmailInput = styled(TextField)({
  backgroundColor: "rgba(44, 44, 44, 0.20)",  // Darker background for the input box
  border: "1px solid rgba(255, 255, 255, 0.10)",
  outline: "none",  
  borderRadius: "4px", 
  fontFamily: '"Rajdhani", sans-serif',

  width: 'calc(100% - 100px)', 
  '& .MuiInputBase-input': {
    color: "#fff",  
    padding: '10px 12px', 
  fontFamily: '"Rajdhani", sans-serif',

  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: "none",  
    },
    '&:hover fieldset': {
      border: "none",  
    },
    '&.Mui-focused fieldset': {
      border: "none",  
    },
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: "#6A1B9A",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#8e24aa",
  },
});

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <FooterContainer>
      <Grid container spacing={4} justifyContent="center" mt={10}>
        <Grid item xs={4} sm={4}>
          <img src={Logo} alt="LogoImge" style={{ height: isMobile? "50px":"70px" }} />
        </Grid>

        {/* Learn Section */}
        <Grid item xs={4} sm={2}>
          <LinkGroup>
            <H4 style={{fontWeight:400}}>Learn</H4>
            <Body2>Litepaper</Body2>
            <Body2>Docs</Body2>
          </LinkGroup>
        </Grid>

        {/* Community Section */}
        <Grid item xs={4} sm={2}>
          <LinkGroup>
            <H4 style={{fontWeight:400}}>Community</H4>
            <Body2>Twitter</Body2>
            <Body2>Farcaster</Body2>
            <Body2>Discord</Body2>
          </LinkGroup>
        </Grid>

        {/* Join Whitelist Section */}
        <Grid item xs={12} sm={4}>
          <H4 style={{fontWeight:400}}>Join Whitelist</H4>
          <Box display="flex" gap="1rem" mt={1} justifyContent= {isMobile ? "flex-end" : "center"}>
            <EmailInput
              placeholder="Email"
              InputProps={{ style: { color: "#fff" } }}
            />
            <SubmitButton variant="contained">Submit</SubmitButton>
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
