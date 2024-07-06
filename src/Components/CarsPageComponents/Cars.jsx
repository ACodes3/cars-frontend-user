import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import carData from "../HomePageComponents/CarsDummyData";
import CarsCard from "./CarsCard";

const Cars = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop:"20px",
        width:"full"
      }}
    >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4" component="h2">
            Available Cars
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
    </div>
  );
};

export default Cars;
