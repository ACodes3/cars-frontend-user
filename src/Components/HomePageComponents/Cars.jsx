import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import CarsCard from "./CarsCard";
import carData from "./CarsDummyData";

const Cars = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <Paper elevation={2} style={{ padding: 20 }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4" component="h2">
            Luxury Car Fleet
          </Typography>
        </Container>

        <Container
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Grid container spacing={3}>
            {carData.map((car) => (
              <Grid item key={car.id} xs={12} sm={6} md={4}>
                <CarsCard car={car} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default Cars;
