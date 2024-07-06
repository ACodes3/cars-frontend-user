import { Box, Container } from "@mui/material";
import React from "react";
import ContactForm from "../Components/ContactComponents/ContactForm";
import ContactInfo from "../Components/ContactComponents/ContactInfo";
import ContactMap from "../Components/ContactComponents/ContactMap";

const ContactPage = () => {
  return (
    <Container>
      <Box
        my={4}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <ContactInfo />
        <ContactForm />
        <ContactMap />
      </Box>
    </Container>
  );
};

export default ContactPage;
