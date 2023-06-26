import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Donut } from "../types/Donut";

export default function DonutCard(donut: Donut) {
    return (
      <Grid item key={donut.id} xs={12} sm={6} md={4}>
        <Card
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
            <Button size="small" variant="contained">View</Button>
            <Button size="small" variant="outlined">Edit</Button>
          </CardActions>
        </Card>
      </Grid>
    );
}