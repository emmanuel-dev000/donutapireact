import { Container, Grid } from "@mui/material";
import GetAllDonuts from "../hooks/GetAllDonuts";
import DonutCard from "./DonutCard";
import LanguageProps from "../interfaces/LanguageProps";

export default function DonutAlbum({ isEnglish } : LanguageProps) {
    const donuts = GetAllDonuts();
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
            {
                donuts.map((donut) => {
                    return (
                        <DonutCard 
                            donutId={donut.id}
                            donutName={donut.name}
                            donutDescription={donut.description}
                            donutImageUrl={donut.imageUrl}
                            isEnglish={isEnglish} />
                    );
                })
            }
            </Grid>
        </Container>
    );
}