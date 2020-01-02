import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateExercise from 'components/CreateExercise';

export default ({ exerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <CreateExercise exerciseCreate={exerciseCreate} />
    </Toolbar>
  </AppBar>
);
