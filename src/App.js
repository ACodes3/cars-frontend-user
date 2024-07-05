import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import UserLogin from "./Login/UserLogin";
import UserMainPage from "./MainPage/UserMainPage";
import Register from "./Register/Register";

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          {/* Default Route for Admin Dashboard */}
          <Route
            path="/:item"
            element={
              <UserLayout>
                <UserMainPage />
              </UserLayout>
            }
          />
          {/* Route for Admin Login */}
          <Route path="/user-login" element={<UserLogin />} />
          {/* Route for Admin Register */}
          <Route path="/user-register" element={<Register />} />
          {/* Default Redirect (if no matching route is found) */}
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  </ThemeProvider>
);

// Separate layout component for Admin Dashboard
const UserLayout = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Navbar />
    {children}
    <Footer />
  </Box>
);

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
