import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Modal } from '@mui/material';

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

export default function DonutFormPopup() {
  const [open, setOpen] = useState(false);
  const openState = () => setOpen(true); 
  const closeState = () => setOpen(false); 
  
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <>
      <Button variant="contained" onClick={openState}>{ "Add new Donut" }</Button>
      <Modal
        open={open}
        onClose={closeState}>
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            { "Add new donut?" }
          </Typography>
          <Box component="form" noValidate /*onSubmit={handleSubmit}*/ sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="id"
                  fullWidth
                  id="id"
                  label="Donut ID"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="Donut Name"
                  name="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description"
                  label="Donut Description"
                  name="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="imageUrl"
                  label="Donut Image URL"
                  id="imageUrl"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={closeState}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
  </>
  );
}
