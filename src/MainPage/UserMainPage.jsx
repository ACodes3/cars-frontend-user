import { Box, Toolbar } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import CarsFilter from "../Pages/CarsFilter";
import ContactPage from "../Pages/ContactPage";
import DocumentationPage from "../Pages/DocumentationPage";
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
    case "documentation":
      contentComponent = <DocumentationPage />;
      break;
    case "cars-filter":
      contentComponent = <CarsFilter />;
      break;
    default:
      contentComponent = null;
  }
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Toolbar />
      {contentComponent}
    </Box>
  );
};

export default UserMainPage;
