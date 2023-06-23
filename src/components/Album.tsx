import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Donut } from '../types/Donut';
import GetAllDonuts from '../hooks/GetAllDonuts';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link underline="none" href="/">
        Donut API
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

function DonutCard(donut: Donut) {
  return (
    <Grid item key={donut.id} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={donut.imageUrl}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {donut.name}
          </Typography>
          <Typography>
            {donut.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">View</Button>
          <Button size="small" variant="outlined">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Album() {
  const donuts = GetAllDonuts();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <DonutSmallIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Donut API
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Donuts
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              { "Sweet and round donuts." }
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">{ "Add new Donut" }</Button>
              <Button variant="outlined">{ "Donuts' Dashboard" }</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {
              donuts.map((donut) => DonutCard(donut))
            }
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Donut API
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made by <Link underline="none" href="https://emmanuel-dev000.github.io/">
            { "Emmanuel A. Pangan" }
          </Link>
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}