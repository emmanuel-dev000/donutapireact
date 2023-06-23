import { Typography, Link, Box } from "@mui/material";

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

export default function Footer() {
    return (
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
    );
}