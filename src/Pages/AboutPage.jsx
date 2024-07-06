import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Our Car Rental Service
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Car Rental Service, your one-stop solution for renting
          cars. We offer a wide range of vehicles to suit your needs, whether
          you're looking for a compact car for city driving, a luxury vehicle
          for a special occasion, or an SUV for a family trip.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform provides an easy and convenient way to book a car online.
          With just a few clicks, you can browse our selection, choose the
          perfect vehicle, and make a reservation. We are committed to providing
          excellent customer service and competitive pricing.
        </Typography>

        <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Features
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Wide variety of vehicles" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="User-friendly online booking system" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Competitive pricing" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="24/7 customer support" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Flexible rental periods" />
            </ListItem>
          </List>
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" paragraph>
            We understand that renting a car can sometimes be a stressful
            experience. That's why we aim to make it as easy and hassle-free as
            possible. Here are a few reasons why you should choose our service:
          </Typography>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Easy booking and payment process" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Transparent pricing with no hidden fees" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="High-quality, well-maintained vehicles" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Convenient locations nationwide" />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
