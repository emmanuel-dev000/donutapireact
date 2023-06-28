import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Modal } from '@mui/material';
import SubstringText from '../utils/SubstringText';
import DonutFormProps from '../interfaces/DonutFormProps';

const style = {
  position: 'absolute' as "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function DonutViewFormPopup({ donutId, donutName, donutDescription, donutImageUrl, isEnglish }: DonutFormProps) {
  const [open, setOpen] = useState(false);
  const openState = () => setOpen(true); 
  const closeState = () => setOpen(false);

  return (
    <>
      <Button size="small" variant="contained" onClick={openState}>
        { (isEnglish) ? "View" : "見て"}
      </Button>
      <Modal
        open={open}
        onClose={closeState}>
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            { donutName }
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>ID: { donutId }</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Name: { donutName }</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Description: { SubstringText(donutDescription) }</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Image URL: { SubstringText(donutImageUrl) }</Typography>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {closeState();}}>
              { (isEnglish) ? "Close" : "閉じる" }
            </Button>
          </Box>
        </Box>
      </Modal>
  </>
  );
}
