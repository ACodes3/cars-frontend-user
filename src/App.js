import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Footer />
  </ThemeProvider>
);

export default App;
