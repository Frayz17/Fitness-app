import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'components/Form';

export default function DialogCreate({ onCreate }) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleToggle}
        size="small"
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleToggle}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <Form onSubmit={onCreate} />
        </DialogContent>
      </Dialog>
    </>
  );
}
