import { Box, Container } from "@mui/material";
import React from "react";
import ContainerOne from "./ContainerOne";
import ContainerTwo from "./ContainerTwo";

const AboutUsHomeCard = () => {
  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "20px",
        }}
      >
        <Container><ContainerOne /></Container>
        <Container><ContainerTwo /></Container>
      </Box>
    </div>
  );
};

export default AboutUsHomeCard;
