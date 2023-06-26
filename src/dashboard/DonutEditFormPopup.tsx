import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { Donut } from '../types/Donut';
import GetDonutById from '../hooks/GetDonutById';
import EditDonutById from '../hooks/EditDonutById';

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

interface DonutEditFormPopupProps {
  donutId: string;
  donutName: string;
}

export default function DonutEditFormPopup({ donutId, donutName }: DonutEditFormPopupProps) {
  const [open, setOpen] = useState(false);
  const openState = () => setOpen(true); 
  const closeState = () => setOpen(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const editDonutById = async () => {
    const editDonut : Donut = {
      id: donutId,
      name: name,
      description: description,
      imageUrl: imageUrl,
    }

    const updatedDonut = await EditDonutById(donutId, editDonut);
    if (updatedDonut != null) {
      alert("Successfully added: " + updatedDonut);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={openState}>{ "Edit" }</Button>
      <Modal
        open={open}
        onClose={closeState}>
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            { donutName }
          </Typography>
          <Box component="form" noValidate /*onSubmit={handleSubmit}*/ sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                editDonutById();
                closeState();
              }}>
              { "Edit" }
            </Button>
          </Box>
        </Box>
      </Modal>
  </>
  );
}
