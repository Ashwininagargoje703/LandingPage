import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled, useMediaQuery, useTheme } from '@mui/system';

import Icon1 from '/assets/Icon.png';
import Icon2 from '/assets/Icon2.png';
import Icon3 from '/assets/Icon3.png';
import Icon4 from '/assets/Icon4.png';
import Icon5 from '/assets/Icon5.png';
import { Body2, H1, H3 } from '../comman/Headings';

// Styled components using MUI's styled utility
const Container = styled(Box)(({ theme }) => ({
  color: '#fff',
  minHeight: '100vh',
  padding: '40px 20px',
  textAlign: 'center',
}));

const GridItem = styled(Grid)({
  textAlign: 'center',
  padding: '20px',
});

const metadata = [
  {
    id: 1,
    icon: Icon1,
    title: 'Game Distribution',
    description: 'Our platform empowers developers to distribute their games across decentralized networks.',
  },
  {
    id: 2,
    icon: Icon2,
    title: 'Play-to-Earn',
    description: 'Leverage the power of blockchain to earn real rewards through gameplay.',
  },
  {
    id: 3,
    icon: Icon3,
    title: 'Tournaments',
    description: 'Influencers can create, host, and manage gaming tournaments, while earning rewards.',
  },
  {
    id: 4,
    icon: Icon4,
    title: 'API/SDK for Developers',
    description: 'Our API and SDK make it easy for game developers to onboard their games to the Peer2Play platform.',
  },
  {
    id: 5,
    icon: Icon5,
    title: 'Community-Driven Growth',
    description:
      'At Peer2Play, we believe in fostering community engagement. Gamers, developers, and influencers all contribute to the platform’s growth.',
  },
];

const WhyPeer2Play = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      <H1>Why Peer2Play</H1>
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {metadata.map((item) => (
          <GridItem key={item.id} item xs={6} sm={6} md={4}>
            <img src={item.icon} style={{ width: isMobile ? '60px' : '100px', height: isMobile ? '60px' : '100px' }} />

            <H3>{item.title}</H3>
            <Body2 style={{ color: 'rgba(255, 255, 255, 0.60)', fontSize: '1.01rem' }}>{item.description}</Body2>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyPeer2Play;
