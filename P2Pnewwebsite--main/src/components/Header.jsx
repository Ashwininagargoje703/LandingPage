import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import logo from "/assets/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { scroller } from "react-scroll";
import { Body } from "../comman/Headings";
import { AiOutlineMenu } from "react-icons/ai";
import Bg from "/assets/nav.png";
import { Instagram, LinkedIn } from "@mui/icons-material"; // Import social icons
import { IconButton } from "@mui/material"; // Import IconButton
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
// Styled Components
const StyledAppBar = styled(Box)`
  background-color: transparent;
  border-radius: 24px;
  z-index: 2;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: white;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  padding: 0.5vh 5vw;
`;

const LinksContainer = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoBox = styled(Box)`
  height: 40px;
  width: 20vw;
  display: flex;
  justify-content: start;

  @media (max-width: 768px) {
    height: 40px;
    width: 100px;
    justify-content: center;
  }
`;

const MobileMenuIcon = styled(Box)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: white;
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const handleFeaturesClick = () => {
    scroller.scrollTo("features-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  const handleLaunchApp = () => {
    window.open("https://app.peer2play.ai", "_blank");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }} // Ensure the Box fills the entire height of the drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Main List */}
      <List>
        <ListItem button onClick={handleFeaturesClick}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Community" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Whitepaper" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Docs" />
        </ListItem>
      </List>

      {/* Social Icons at the Bottom */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={logo} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <IconButton color="inherit" href="https://facebook.com">
            <FaDiscord />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com">
            <FaXTwitter />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com">
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <StyledAppBar position="static" data-aos="fade-down">
      <StyledToolbar>
        {/* Logo */}
        <LogoBox>
          <img
            src={logo}
            alt="logo"
            style={{ height:isMobile ?"65%": "100%", width: "auto" }}
          />
        </LogoBox>
        {/* Desktop Links */}
        <LinksContainer>
          <Body
            onClick={handleFeaturesClick}
            style={{ fontSize: "16px", color: "white" }}
          >
            About
          </Body>
          <Body style={{ fontSize: "16px" }}>Community</Body>
          <Body style={{ fontSize: "16px" }}>Whitepaper</Body>
          <Body style={{ fontSize: "16px" }}>Docs</Body>
        </LinksContainer>

        <button onClick={handleLaunchApp}>Launch App</button>

        <MobileMenuIcon
          edge="start"
          color="inherit"
          onClick={toggleDrawer(true)}
        >
          <AiOutlineMenu fontSize={"30px"}/>
        </MobileMenuIcon>
      </StyledToolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            color: "white",
            backgroundImage: `url(${Bg})`,
            backgroundColor: "black",
            display: "flex", // Ensure the Paper element itself uses flexbox
          },
        }}
      >
        <Box
          sx={{
            "& .MuiListItem-root": {
              width: "100%",
              textAlign: "center",
              mt: 2,
            },
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />

          {drawerList}
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;
