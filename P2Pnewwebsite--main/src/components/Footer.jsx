import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
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
  backgroundColor: "#333",
  borderRadius: "4px",
  input: {
    color: "#fff",
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
  return (
    <FooterContainer>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <img src={Logo} alt="LogoImge" style={{ height: "80px" }} />
        </Grid>

        {/* Learn Section */}
        <Grid item xs={12} sm={2}>
          <LinkGroup>
            <H4>Learn</H4>
            <Body2>Litepaper</Body2>
            <Body2>Docs</Body2>
          </LinkGroup>
        </Grid>

        {/* Community Section */}
        <Grid item xs={12} sm={2}>
          <LinkGroup>
            <H4>Community</H4>
            <Body2>Twitter</Body2>
            <Body2>Farcaster</Body2>
            <Body2>Discord</Body2>
          </LinkGroup>
        </Grid>

        {/* Join Whitelist Section */}
        <Grid item xs={12} sm={4}>
          <H4>Join Whitelist</H4>
          <Box display="flex" gap="1rem" mt={1} justifyContent="center">
            <EmailInput
              variant="outlined"
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
