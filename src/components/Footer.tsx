import { Typography, Link, Box } from "@mui/material";
import LanguageProps from "../interfaces/LanguageProps";

function Copyright({ isEnglish }: LanguageProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
        <Link underline="none" href="/">
            Donut API
        </Link>{' '}
        { new Date().getFullYear() }
        { (isEnglish) ? "." : "年。" }
        </Typography>
    );
}

export default function Footer({ isEnglish } : LanguageProps) {
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
            <Copyright isEnglish={isEnglish}/>
        </Box>
    );
}