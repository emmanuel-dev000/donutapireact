import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import DonutAlbum from './DonutAlbum';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E33E7F'
    }
  },
  typography: {
    fontFamily: [
      'Arial',
    ].join(","),
  }
});

export default function Body() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Header />
        <DonutAlbum />
      </main>
      <Footer />
    </ThemeProvider>
  );
}