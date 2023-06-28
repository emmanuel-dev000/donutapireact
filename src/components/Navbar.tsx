import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import { Link } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
    return (
        <AppBar position="sticky" elevation={6}>
            <Toolbar>
                <DonutSmallIcon sx={{ mr: 2 }} />
                <Typography sx={{ flexGrow: 1 }} variant="h6" color="inherit" noWrap>
                    { "Donut API" }
                </Typography>
                <LanguageSwitch />
                <Button variant="text" color="inherit">
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        { "Login" }
                    </Link>
                </Button>
            </Toolbar>
      </AppBar>
    );
}