import React, { useState} from 'react';
import Table from './Components/Table/Table';
import DeleteDialog from './Components/Dialogs/DeleteDialog';
import ConfirmationDialog from './Components/Dialogs/ConfirmationDialog';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function BasicTable() {
    const [OpenDelete, setOpenDelete] = useState(false);
    const [OpenInfo, setOpenInfo] = useState(false);
    const [openEdit, setopenEdit] = useState(false);
    const [Id, setId] = useState(null);
    const [SelectedRow, setSelectedRow] = useState({});
    const classes = useStyles();
    const [rows, setrows] = useState([
        {Title: 'Title 1', Description: 'Description 1', Checked: 'True', createdAt: new Date().toDateString(), FinishedAt: new Date().toDateString(), ArchiveAt: '',  id: 0},
        {Title: 'Title 2', Description: 'Description 2', Checked: 'True', createdAt: new Date().toDateString(), FinishedAt: new Date().toDateString(), ArchiveAt: '',  id: 1},
        {Title: 'Title 3', Description: 'Description 3', Checked: 'True', createdAt: new Date().toDateString(), FinishedAt: new Date().toDateString(), ArchiveAt: '',  id: 2},    
    ]);

    return (
        <>
            <Table 
            rows={rows}
            headers={['Title', 'Description', 'Checked', 'createdAt', 'FinishedAt', 'ArchiveAt' ]}
            Cells={['Title', 'Description', 'Checked', 'createdAt', 'FinishedAt', 'ArchiveAt']}
            onDelete={(row) => {setSelectedRow(row); setOpenDelete(true); setId(row.id);}}
            onEdit={(row) => { setSelectedRow(row); setopenEdit(true); setId(row.id);}}
            ondrop={(data) => {setOpenDelete(true)}}
            ondrag={(id) => { setId(id); }}
            setOpenInfo={setOpenInfo}
            HandelNew={() => {setSelectedRow({Title: '', Description: ''}); setopenEdit(true)}}
            />
            <DeleteDialog 
            open={OpenDelete} 
            setOpen={setOpenDelete}
            list={rows}
            setList={setrows}
            id={Id}
            />
            <ConfirmationDialog 
            open={OpenInfo} 
            setOpen={setOpenInfo}
            title='Info'
            hideAgree={true}
            >
                Show More Info...
            </ConfirmationDialog>

            <ConfirmationDialog 
            open={openEdit} 
            setOpen={setopenEdit}
            title={SelectedRow?.id ? 'Edit' : 'Add'}
            list={rows}
            setList={setrows}
            id={Id}
            SelectedRow={SelectedRow}
            >
            <form className={classes.root} noValidate autoComplete="off">
                <TextField value={SelectedRow?.Title} onChange={(e) => setSelectedRow((prev) => ({...prev, Title: e.target.value}))} id="standard-basic" label="Title" />
                <TextField value={SelectedRow?.Description}  onChange={(e) => setSelectedRow((prev) => ({...prev, Description: e.target.value}))}  id="standard-basic" label="Description" />
            </form>
            </ConfirmationDialog>
        </>
    );
}