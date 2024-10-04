import React from 'react';
import { Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Img1 from '/assets/sei.png';
import Img2 from '/assets/beyond.png';
import { Body2, H1 } from '../comman/Headings';

const PoweredBySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 10,
      }}
    >
      <H1>Powered by Sei & Beyond</H1>
      <br />
      <Body2>
        Peer2Play is currently built on the Sei testnet, but our vision extends across multiple blockchain ecosystems.{' '}
        As we grow, we aim to onboard games, developers, and players from various blockchain networks, ensuring a
        seamless decentralized gaming experience for all.
      </Body2>

      <Grid container spacing={3} justifyContent="center" mt={4}>
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              justifyContent: 'flex-end',
              display: 'flex',
              mr: isMobile ? 0 : 2,

              '& img': {
                width: isMobile? "100%": '60%',
                height: isMobile? "100%":  '70%',
              },
            }}
          >
            <img src={Img1} alt="Sei Network" />
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              justifyContent: 'flex-start',

              display: 'flex',
              ml: isMobile ? 0 : 2,
              '& img': {
                width: isMobile? "100%": '60%',
                height: isMobile? "100%":  '70%',
              },
            }}
          >
            <img src={Img2} alt="Other Blockchain" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PoweredBySection;
