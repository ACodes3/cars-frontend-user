import React from 'react';
import SportsCar from "../../Images/white-coupe-sport.jpg";

const ContainerTwo = () => {
  return (
    <div style={{ width: "650px", overflow: "hidden", borderRadius: "10px" }}>
      <img
        style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }}
        src={SportsCar}
        alt="sport-car-container"
      />
    </div>
  )
}

export default ContainerTwo;
