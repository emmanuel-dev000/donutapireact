import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DonutFormPopup from "./DonutAddPopup";
import LanguageProps from "../interfaces/LanguageProps";

export default function Header({ isEnglish } : LanguageProps) {
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
                { (isEnglish) ? "Sweet and round donuts." : "甘いとまるドーナツ。"}
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center">
                <DonutFormPopup isEnglish={isEnglish} />
                <Button variant="outlined">
                    <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                        { (isEnglish) ? "Donuts' Dashboard" : "ドーナツのダシュボード"}
                    </Link>
                </Button>
            </Stack>
            </Container>
      </Box>
    );
}