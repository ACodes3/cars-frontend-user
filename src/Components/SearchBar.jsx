import { Box, Container } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import * as React from "react";
import { useState } from "react";

const destinations = [
  { label: "Ljubljana" },
  { label: "Maribor" },
  { label: "Novo mesto" },
  { label: "Kranj" },
  { label: "Celje" },
  { label: "Koper" },
  { label: "Ptuj" },
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

const SearchBar = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [valueTime, setValueTime] = React.useState(dayjs("2022-04-17T15:30"));
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Container sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: "15px", borderRadius: "5px" }}>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={destinations}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Pick-up"/>}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={destinations}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Return" />}
          />
          <DatePicker
            label="Pick-up Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <TimePicker
            label="Pick-up Time"
            value={valueTime}
            onChange={(newValue) => setValueTime(newValue)}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "15px", marginTop: "15px" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={passengerNumber}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Number of Passengers" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={passengerNumber}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Number of Luggage / Bags" />
            )}
          />
          <DatePicker
            label="Return Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <TimePicker
            label="Return Time"
            value={valueTime}
            onChange={(newValue) => setValueTime(newValue)}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "15px", marginTop: "15px" }}>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by"
              value={sortBy}
              onChange={handleChange}
              label="Sort By"
            >
              <MenuItem value={10}>Price Low to High</MenuItem>
              <MenuItem value={20}>Price High to Low</MenuItem>
              <MenuItem value={30}>Electric vehicles first</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel>
            <Select
              labelId="vehicle-type-label"
              id="vehicle-type"
              value={sortBy}
              onChange={handleChange}
              label="Vehicle Type"
            >
              <MenuItem value={10}>Sedan</MenuItem>
              <MenuItem value={20}>SUV</MenuItem>
              <MenuItem value={30}>Coupe</MenuItem>
              <MenuItem value={40}>Convertible</MenuItem>
              <MenuItem value={50}>Family Car</MenuItem>
              <MenuItem value={30}>Station Wagon</MenuItem>
              <MenuItem value={30}>Electric vehicle</MenuItem>
              <MenuItem value={30}>Luxury vehicle</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 250 }}>
            <InputLabel id="gearshift-label">Gearshift</InputLabel>
            <Select
              labelId="gearshift-label"
              id="gearshift"
              value={sortBy}
              onChange={handleChange}
              label="Gearshift"
            >
              <MenuItem value={10}>Automatic</MenuItem>
              <MenuItem value={20}>Manual</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 240 }}>
            <InputLabel id="drivers-age-label">Drivers Age</InputLabel>
            <Select
              labelId="drivers-age-label"
              id="drivers-age"
              value={sortBy}
              onChange={handleChange}
              label="Drivers Age"
            >
              <MenuItem value={10}>18+</MenuItem>
              <MenuItem value={20}>21+</MenuItem>
              <MenuItem value={20}>25+</MenuItem>
              <MenuItem value={20}>30+</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};

export default SearchBar;
