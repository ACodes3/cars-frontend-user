import Box from "@mui/material/Box";
import * as React from "react";
import CarHeroImg from "../Images/lamborghini-urus-1016.jpg";
import SearchBar from "./SearchBar";

const HeroCard = () => {
  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      height: "80vh",
      overflow: "hidden",
    }}>
      <img
        src={CarHeroImg}
        alt="car-hero-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      {/* Optional: Overlay content like text or buttons */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1>Welcome to Car Rental</h1>
        <p>Find your dream car and hit the road!</p>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default HeroCard;
