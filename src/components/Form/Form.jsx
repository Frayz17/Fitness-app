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

export default function Form({ onSubmit, exercise }) {
  const [tempExercise, setTempExercise] = React.useState(getInitialState());

  function getInitialState() {
    console.log(exercise);
    return exercise
      ? exercise
      : {
          title: '',
          description: '',
          muscles: ''
        };
  }

  const classes = styles();

  const resetExercise = () => {
    setTempExercise({
      title: '',
      description: '',
      muscles: ''
    });
  };

  const handleSubmit = () => {
    // TODO: validate

    onSubmit({
      ...tempExercise,
      id: tempExercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });

    resetExercise();
  };

  const handleChange = (name) => (e) => {
    console.log(tempExercise);
    setTempExercise({
      ...tempExercise,
      [name]: e.target.value
    });
  };

  return (
    <form>
      <TextField
        required
        label="title"
        variant="outlined"
        onChange={handleChange('title')}
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
        onChange={handleChange('description')}
        margin="normal"
        className={classes.inputFields}
      />
      <br />
      <FormControl className={classes.inputFields}>
        <InputLabel>Muscles</InputLabel>
        <Select value={tempExercise.muscles} onChange={handleChange('muscles')}>
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
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </form>
  );
}
