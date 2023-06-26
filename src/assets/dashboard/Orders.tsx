import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';
import { Donut } from '../../types/Donut';
import GetAllDonuts from '../../hooks/GetAllDonuts';
import React from 'react';
import DeleteDonutById from '../../hooks/DeleteDonutById';

export default function Orders() {
  const donuts = GetAllDonuts();
  return (
    <React.Fragment>
      <Title>Donuts</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image URL</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              donuts.map((donut) => DonutRow(donut))
            }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

function DonutRow(donut : Donut) {
  return (
    <TableRow key={donut.id}>
      <TableCell>{donut.id}</TableCell>
      <TableCell>{donut.name}</TableCell>
      <TableCell>{SubstringText(donut.description)}</TableCell>
      <TableCell>{SubstringText(donut.imageUrl)}</TableCell>
      <TableCell><Button variant="contained">{ "Edit" }</Button></TableCell>
      <TableCell>
        <Button color="error" variant="contained" onClick={ async() => {
          const data = await DeleteDonutById(donut.id);
          alert(data);
        }}>
          { "Delete" }
        </Button>
      </TableCell>
  </TableRow>
  );
}

function SubstringText(text: string) {
  const MAX_CHARS_SHOWN = 25;
  return (text.length < MAX_CHARS_SHOWN) ? text : text.substring(0, MAX_CHARS_SHOWN) + "...";
}