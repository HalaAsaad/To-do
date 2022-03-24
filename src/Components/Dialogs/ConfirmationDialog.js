import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog({
    open,
    setOpen,
    title,
    list,
    setList,
    id,
    SelectedRow,
    children,
    hideAgree
}) {

  const handleClose = () => {
    setOpen(false);
  };
 const handleAgree = () => {
   if(SelectedRow?.id) {
    let findItem = list.find((ele) => `${ele.id}` === `${id}`);
    let index = list.indexOf(findItem);
    let newList =  [...list];
    newList[index] = SelectedRow;
    setList([...newList]);
    setOpen(false);
   } else {
     setList((prev) => ([
      ...prev,
         {
        ...SelectedRow,
         Checked: 'True',
         createdAt: new Date().toDateString(), 
         FinishedAt: new Date().toDateString(), 
         ArchiveAt: '', 
         id: list.length
      }
     ]));
     setOpen(false);
   }
   
 };
  return (
    <div>
       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* {title} */}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
          {!hideAgree && <Button onClick={handleAgree} color="primary" autoFocus>
            Agree
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
