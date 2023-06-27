import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DonutFormPopup from "./DonutAddPopup";

export default function Header() {
    return (
        <Box
            sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6}}>
            <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom>
                Donuts
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                { "Sweet and round donuts." }
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center">
                <DonutFormPopup />
                <Button variant="outlined">
                    <Link to="/donutapireact/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                        { "Donuts' Dashboard" }
                    </Link>
                </Button>
            </Stack>
            </Container>
      </Box>
    );
}