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
import { Add, Create, Info } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({
    rows,
    Cells,
    headers,
    onDelete,
    onEdit,
    ondrag,
    ondrop,
    setOpenInfo,
    HandelNew
}) {
  const classes = useStyles();
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ondrag(ev.target.id)
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    ondrop(data);
  }
  

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              {headers?.map((header, i) =>  <TableCell align="left" key={i}><b>{header}</b></TableCell>)}
              <TableCell align="left"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow 
              key={index}
              id={row?.id}
              src="img_logo.gif" 
              draggable="true" 
              onDragStart={(e) => drag(e)}
              style={{cursor:'move'}}
              >
                  {Cells?.map((cell, i) => 
                    <TableCell component="th" scope="row" key={i}>
                        {row[cell]}
                    </TableCell>)}
                    <TableCell align="left">
                        <IconButton aria-label="info" onClick={() => setOpenInfo(true)}>
                            <Info />
                        </IconButton>
                        <IconButton aria-label="create" onClick={() => onEdit(row)}>
                            <Create />
                        </IconButton>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <div style={{display:'flex', justifyContent: 'flex-end', marginTop:'15px', marginRight:'25px'}}>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Add />}
            onClick={HandelNew}
        >
            new
        </Button>
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            style={{ marginLeft: '15px' }}
            startIcon={<DeleteIcon />}
            id="div1" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}
        >
            Delete
        </Button>
      </div>
    </div>
  );
}
