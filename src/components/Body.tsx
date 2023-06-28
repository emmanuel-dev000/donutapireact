import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import DonutAlbum from './DonutAlbum';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

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
  const [open, setOpen] = React.useState(true);
  const [isEnglish, setToEnglish] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const setLanguageToEnglish = () => {
    setToEnglish(true);
  };

  const setLanguageToJapanese = () => {
    setToEnglish(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Language Preference"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Choose your language preference among the following.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => {
              handleClose();
              setLanguageToJapanese();
            }}>{ "日本語" }</Button>
            <Button variant="contained" onClick={() => {
              handleClose();
              setLanguageToEnglish();
            }}>{ "English" }</Button>
          </DialogActions>
        </Dialog>
        <Header isEnglish={isEnglish}/>
        <DonutAlbum isEnglish={isEnglish}/>
      </main>
      <Footer isEnglish={isEnglish}/>
    </ThemeProvider>
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});