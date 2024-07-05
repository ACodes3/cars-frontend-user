import {
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Styled components
const CustomContainer = styled(Container)({
  backgroundColor: "#f0f0f0", // Example background color
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  marginBottom: "20px",
});

const Heading = styled(Typography)({
  marginBottom: "15px",
  textAlign: "center",
  color: "#333333", // Example text color
});

const Subheading = styled(Typography)({
  marginBottom: "10px",
  color: "#666666", // Example text color
});

const CustomCard = styled(Card)({
  backgroundColor: "#ffffff", // Example background color
  color: "#333333", // Example text color
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ContainerOne = () => {
  return (
    <CustomContainer>
      <Heading variant="h4">We Are More Than A Car Rental Company</Heading>
      <Subheading variant="body1" paragraph>
        Car repair quisque sodales dui ut varius vestibulum drana tortor turpis
        porttiton tellus eu euismod nisl massa nutodio in the miss volume place
        urna lacinia eros nunta urna mauris vehicula rutrum in the miss on
        volume interdum.
      </Subheading>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CustomCard>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Luxury Cars
              </Typography>
              <Typography variant="body2">
                Description of Luxury Cars goes here...
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </CustomCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomCard>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sports Cars
              </Typography>
              <Typography variant="body2">
                Description of Sports Cars goes here...
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </CustomCard>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default ContainerOne;
