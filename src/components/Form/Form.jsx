import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { muscles } from 'store';

const styles = makeStyles((theme) => ({
  inputFields: {
    width: 300
  }
}));

export default function Form({ exerciseCreate }) {
  const [exercise, setExercise] = React.useState({
    title: '',
    description: '',
    muscles: ''
  });

  const classes = styles();

  const resetExercise = () => {
    setExercise({
      title: '',
      description: '',
      muscles: ''
    });
  };

  const handleSubmit = () => {
    // TODO: validate

    exerciseCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });

    resetExercise();
  };

  const handleChange = (name) => (e) => {
    setExercise({
      [name]: e.target.value
    });
  };

  return (
    <form>
      <TextField
        required
        label='title'
        variant='outlined'
        onChange={handleChange('title')}
        margin='normal'
        className={classes.inputFields}
      />
      <br />
      <TextField
        required
        label='description'
        variant='outlined'
        multiline
        rows='4'
        onChange={handleChange('description')}
        margin='normal'
        className={classes.inputFields}
      />
      <br />
      <FormControl className={classes.inputFields}>
        <InputLabel>Muscles</InputLabel>
        <Select value={exercise.muscles} onChange={handleChange('muscles')}>
          {muscles.map((item, i) => {
            return (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <br />
      <DialogActions>
        <Button onClick={handleSubmit} color='primary'>
          Create
        </Button>
      </DialogActions>
    </form>
  );
}
