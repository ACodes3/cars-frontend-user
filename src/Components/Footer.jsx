import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="primary.contrastText" p={4} my={6}>
      <Box style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Typography variant="h6" gutterBottom>
          Car Rental
        </Typography>
        <Box style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Typography variant="body2" color="white" gutterBottom>
            <Link href="#" style={{ color: "white" }}>
              Home
            </Link>
            {" | "}
            <Link href="#" style={{ color: "white" }}>
              Documentation
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            © Aspasija Cvetkoska, 2024. Ljubljana, Slovenia. All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
