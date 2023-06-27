import { Grid, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import { Donut } from "../types/Donut";
import DonutEditFormPopup from "../dashboard/DonutEditFormPopup";
import DonutViewFormPopup from "./DonutViewPopup";

export default function DonutCard(donut: Donut) {
    return (
      <Grid item key={donut.id} xs={12} sm={6} md={4}>
        <Card
          elevation={4}
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
            <DonutViewFormPopup donutId={donut.id} donutName={donut.name} donutDescription={donut.description} donutImageUrl={donut.imageUrl} />
            <DonutEditFormPopup donutId={donut.id} donutName={donut.name} />
          </CardActions>
        </Card>
      </Grid>
    );
}