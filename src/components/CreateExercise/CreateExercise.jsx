import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { muscles } from 'store';

const styles = makeStyles((theme) => ({
  inputFields: {
    width: 300
  }
}));

export default function CreateExercise({ exerciseCreate }) {
  const [open, setOpen] = React.useState(false);

  const [exercise, setExercise] = React.useState({
    title: '',
    description: '',
    muscles: ''
  });

  const classes = styles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const resetExercise = () => {
    setExercise({
      title: '',
      description: '',
      muscles: ''
    });
  };

  const handleClose = () => {
    setOpen(false);
    resetExercise();
  };

  const handleSubmit = () => {
    // TODO: validate

    exerciseCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });

    setOpen(false);
    resetExercise();
  };

  const createExercise = (name) => (e) => {
    setExercise({
      ...exercise,
      [name]: e.target.value
    });
  };

  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleClickOpen}
        size="small"
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form>
            <TextField
              required
              label="title"
              variant="outlined"
              onChange={createExercise('title')}
              margin="normal"
              className={classes.inputFields}
            />
            <br />
            <TextField
              required
              label="description"
              variant="outlined"
              multiline
              rows="4"
              onChange={createExercise('description')}
              margin="normal"
              className={classes.inputFields}
            />
            <br />
            <FormControl className={classes.inputFields}>
              <InputLabel>Muscles</InputLabel>
              <Select
                value={exercise.muscles}
                onChange={createExercise('muscles')}
              >
                {muscles.map((item, i) => {
                  return (
                    <MenuItem key={i} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
