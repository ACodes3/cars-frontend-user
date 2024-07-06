import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React, { useState } from "react";

const SideBarFilter = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const destinations = [
    { label: "New York" },
    { label: "Los Angeles" },
    { label: "Chicago" },
    { label: "Houston" },
    { label: "Phoenix" },
  ];

  const passengerNumber = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      p={2}
    >
      <h2>Filter By</h2>
      <form>
        <Box
          sx={{
            "& .MuiTextField-root, & .MuiFormControl-root, & .MuiAutocomplete-root":
              { width: "100%", mb: 2 },
          }}
        >
          <Autocomplete
            options={destinations}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pickup Destination"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Autocomplete
            options={destinations}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Return Destination"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <DatePicker
            label="Pick-up Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <DatePicker
            label="Return Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={passengerNumber}
            renderInput={(params) => (
              <TextField {...params} label="Number of Passengers" fullWidth />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={passengerNumber}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Number of Luggage / Bags"
                fullWidth
              />
            )}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Sort by</InputLabel>
            <Select label="Sort by" defaultValue="">
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="distance">Distance</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Vehicle Type</InputLabel>
            <Select label="Vehicle Type" defaultValue="">
              <MenuItem value="sedan">Sedan</MenuItem>
              <MenuItem value="suv">SUV</MenuItem>
              <MenuItem value="truck">Truck</MenuItem>
              <MenuItem value="van">Van</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Driver's Age"
            type="number"
            variant="outlined"
            fullWidth
          />
        </Box>
      </form>
      <Divider />
      <Box
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={toggleDrawer("left", false)}
          variant="contained"
          color="warning"
        >
          Close
        </Button>
        <Button variant="contained">Filter</Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" onClick={toggleDrawer(anchor, true)}>Filter</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBarFilter;
