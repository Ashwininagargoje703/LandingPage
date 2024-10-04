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
        padding: "10px",
        textAlign: "center",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${Bg})`,
        width: "auto",
        height: "23rem",
        flexWrap:"nowrap",
        mb:2,
        
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&:before": {
          content: '""',
          bottom: 0,
          left: 0,
          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
          flexWrap: "nowrap",
          backgroundSize: "cover", // Cover the background for responsiveness
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
        <Body2
          dangerouslySetInnerHTML={{ __html: description }} 
        />
      </CardContent>
    </Box>
  );
};

const Ecosystem = () => {
  return (
    <Box sx={{ padding: "20px", textAlign: "center", placeItems:"center", justifyContent:"center"  }}>
      <H1>
        Our Ecosystem
      </H1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <EcosystemCard
            title="Gamers"
            image={Img1}
            description="Unlock a new way of playing and <br />earning. Compete in tournaments,<br /> earn rewards, and become a part of a <br /> decentralized gaming revolution."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EcosystemCard
            title="Game Devs"
            image={Img2}
            description="Seamlessly integrate your games <br /> with SDK and APIs. Reach a global <br /> audience and tap into the power of <br /> decentralized, secure gaming  <br />systems."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EcosystemCard
            title="Influencers"
            image={Img3}
            description=" Create, host, and engage. Host <br /> tournaments and challenges, earn <br /> rewards, and build a community <br /> through Peer2Play’s decentralized <br /> ecosystem."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ecosystem;
