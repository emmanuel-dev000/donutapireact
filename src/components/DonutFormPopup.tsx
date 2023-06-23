import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Modal } from '@mui/material';
import AddNewDonut from '../hooks/AddNewDonut';
import { Donut } from '../types/Donut';

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

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addNewDonut = async () => {
    const donut : Donut = {
      id: id,
      name: name,
      description: description,
      imageUrl: imageUrl,
    }

    const savedDonut = await AddNewDonut(donut);
    if (savedDonut != null) {
      alert("Successfully added: " + savedDonut);
    }
  };

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
                  onChange={(e) => setId(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="Donut Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description"
                  label="Donut Description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="imageUrl"
                  label="Donut Image URL"
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                addNewDonut();
                closeState();
              }}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
  </>
  );
}
