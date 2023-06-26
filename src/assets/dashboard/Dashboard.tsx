import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import { AppBar, Button } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
        <Toolbar>
            <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            >
            { "Dashboard" }
            </Typography>
            <Button variant="text" color="inherit">{ "Logout" }</Button>
        </Toolbar>
        </AppBar>
        <Box
        component="main"
        sx={{
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        }}
        >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid>
            <Grid item xs={12}>
                <Paper elevation={6} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
                </Paper>
            </Grid>
            </Grid>
        </Container>
        </Box>
  </Box>
  );
}