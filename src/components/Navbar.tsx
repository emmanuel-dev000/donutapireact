import { AppBar, Toolbar, Typography } from "@mui/material";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

export default function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
            <DonutSmallIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
                Donut API
            </Typography>
            </Toolbar>
      </AppBar>
    );
}