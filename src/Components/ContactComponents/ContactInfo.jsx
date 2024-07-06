import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

const ContactInfo = () => {
  return (
    <Box mt={4}>
      <Typography variant="h5" component="h2" gutterBottom>
        Contact Information
      </Typography>
      <List
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phone" secondary="+1 234 567 890" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" secondary="info@carrental.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText
            primary="Address"
            secondary="123 Car Rental St, San Francisco, CA, USA"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactInfo;
