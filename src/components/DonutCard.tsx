import { Grid, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import DonutEditFormPopup from "../dashboard/DonutEditFormPopup";
import DonutViewFormPopup from "./DonutViewPopup";
import DonutFormProps from "../interfaces/DonutFormProps";

export default function DonutCard({ donutId, donutName, donutDescription, donutImageUrl, isEnglish }: DonutFormProps) {
    return (
      <Grid item key={donutId} xs={12} sm={6} md={4}>
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
            image={donutImageUrl}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {donutName}
            </Typography>
            <Typography>
              {donutDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <DonutViewFormPopup donutId={donutId} donutName={donutName} donutDescription={donutDescription} donutImageUrl={donutImageUrl} isEnglish={isEnglish}/>
            <DonutEditFormPopup donutId={donutId} donutName={donutName} />
          </CardActions>
        </Card>
      </Grid>
    );
}