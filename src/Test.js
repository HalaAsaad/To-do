import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Add, Create } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, id) {
  return { name, calories, fat, carbs, protein, id };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2),
  createData('Eclair', 262, 16.0, 24, 6.0, 3),
  createData('Cupcake', 305, 3.7, 67, 4.3, 4),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 5),
];

export default function BasicTable() {
  const classes = useStyles();
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  return (
    <>
      <IconButton aria-label="add">
        <Add />
      </IconButton>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="left">Calories</TableCell>
              <TableCell align="left">Fat&nbsp;(g)</TableCell>
              <TableCell align="left">Carbs&nbsp;(g)</TableCell>
              <TableCell align="left">Protein&nbsp;(g)</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} id="drag1" src="img_logo.gif" draggable="true" ondragstart={(e) => drag(e)}
              style={{cursor:'move'}}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
                <TableCell align="left">
                  <IconButton aria-label="delete" onClick={() => console.log(row)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="create" onClick={() => console.log(row)}>
                    <Create />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton aria-label="delete" style={{color:'red'}} id="div1" ondrop={(e) => drop(e)} ondragover={(e) => allowDrop(e)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}
