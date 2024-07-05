import { Box, Toolbar } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import HomePage from "../Pages/HomePage";

const UserMainPage = () => {
  let { item } = useParams();
  let contentComponent;

  switch (item) {
    case "home":
      contentComponent = <HomePage />;
      break;
    case "about":
      contentComponent = <AboutPage />;
      break;
    case "contact":
      contentComponent = <ContactPage />;
      break;
    default:
      contentComponent = null;
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {contentComponent}
    </Box>
  );
};

export default UserMainPage;
