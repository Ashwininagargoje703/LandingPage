import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import Img1 from "/assets/eco.png";
import Img2 from "/assets/eco2.png";
import Img3 from "/assets/eco3.png";
import Bg from "/assets/ecoBg.svg";
import { Body2, H1, H3 } from "../comman/Headings";

const EcosystemCard = ({ title, image, description }) => {
  return (
    <Box
      sx={{
        backgroundColor: "none",
        color: "#FFFFFF",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${Bg})`,
        width: "auto",
        height: "100%",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&:before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ marginBottom: "20px" }}>
          <img
            src={image}
            alt={title}
            style={{ width: "80px", height: "80px" }}
          />
        </Box>
        <H3
        >
          {title}
        </H3>
        <Body2>
          {description}
        </Body2>
      </CardContent>
    </Box>
  );
};

const Ecosystem = () => {
  return (
    <Box sx={{ padding: "40px", textAlign: "center",  }}>
      <H1>
        Our Ecosystem
      </H1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <EcosystemCard
            title="Gamers"
            image={Img1}
            description="Unlock a new way of playing and earning. Compete in tournaments, earn rewards, and become a part of a decentralized gaming revolution."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EcosystemCard
            title="Game Devs"
            image={Img2}
            description="Seamlessly integrate your games with SDK and APIs. Reach a global audience and tap into the power of decentralized, secure gaming systems."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EcosystemCard
            title="Influencers"
            image={Img3}
            description=" Create, host, and engage. Host tournaments and challenges, earn rewards, and build a community through Peer2Play’s decentralized ecosystem."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ecosystem;
