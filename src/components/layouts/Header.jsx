import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DialogCreate from 'components/DialogCreate';

export default ({ onCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <DialogCreate onCreate={onCreate} />
    </Toolbar>
  </AppBar>
);
