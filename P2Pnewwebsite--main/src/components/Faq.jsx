import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  useMediaQuery,
  useTheme,
  Box,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Body2, H1, H2, H3, H4, H5 } from "../comman/Headings";

import Aos from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is a Social Gaming Platform?",
    answer:
      "A social gaming platform allows players to interact, compete, and collaborate in games, all while earning rewards in a decentralized ecosystem.",
  },
  {
    question: "How Does Game inetegration work in Peer2Play?",
    answer:
      "Through seamless APIs and SDKs, you can integrate your game into the Peer2Play ecosystem and immediately start interacting with players and influencers.",
  },
  {
    question: "What are the requirements for integration?",
    answer:
      "Basic compliance and legality checks are necessary to ensure a safe and fair environment for all users.",
  },
  {
    question: "How long does it take to integrate a game?",
    answer:
      "Integration can be completed within a few days, depending on the complexity of your game and its blockchain requirements.",
  },
];

const FAQContainer = styled("div")(({ theme }) => ({
  padding: "50px 3vw",
  overflow: "hidden",
  textAlign: "center",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0.5vw",
  },
}));



const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: "10px",
  marginTop: "20px",
  textAlign: "left",

  borderRadius: "10px",
  border: "1px solid rgba(118, 118, 118, 0.51)",
  boxShadow: "0px 4px 33px 0px rgba(0, 0, 0, 0.25)",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: "10px 20px",
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "20px 20px",
  marginTop: "-30px",
}));

const FAQSection = () => {
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
      <FAQContainer>
        <H1 data-aos={isMobile ? "fade-up" : "fade-left"}>FAQ</H1>

        {faqData.map((faq, index) => (
          <StyledAccordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <H4 style={{fontWeight:500}}>{faq.question}</H4>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Body2 style={{color:"rgba(255, 255, 255, 0.60)", }}>{faq.answer}</Body2>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </FAQContainer>
  );
};

export default FAQSection;
