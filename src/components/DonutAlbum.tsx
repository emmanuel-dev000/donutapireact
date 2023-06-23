import { Container, Grid } from "@mui/material";
import GetAllDonuts from "../hooks/GetAllDonuts";
import DonutCard from "./DonutCard";

export default function DonutAlbum() {
    const donuts = GetAllDonuts();
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
            {
                donuts.map((donut) => DonutCard(donut))
            }
            </Grid>
        </Container>
    );
}