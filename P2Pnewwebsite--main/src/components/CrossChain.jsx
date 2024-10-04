import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

import Video from "/assets/globe.mp4";
import Bg2 from "/assets/herobg2.png";
import { Body, Body2, Heading } from '../comman/Headings';

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
      height: "60%", // Reduced height here
      backgroundImage: `url(${Video})`,
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
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
      backgroundRepeat: "repeat-y",
    },
  }));

const CrossChainCompatibility = () => {
  return (
    <HeroSection>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: '0', // Ensuring it is aligned to the top
          width: '70%',
          height: '100%', // Reduced height
          objectFit: 'cover',
          zIndex: '-2',
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Glowing Second Layer */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,1))',
          zIndex: '-1',
        }}
      />

      {/* Content */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Glowing text effect */}
        <Heading
        >
          Cross Chain <br />Compatibility
        </Heading>
        <Body2
         
        >
          Peer2Play is built with a multi-chain framework, enabling users to play, <br />
          earn, and compete across a variety of blockchain networks. Whether you're <br />
          on the Sei testnet or any other chain, our platform offers a seamless gaming <br />
          experience, ensuring that no one is left out.
        </Body2>
      </Container>
    </HeroSection>
  );
};

export default CrossChainCompatibility;
