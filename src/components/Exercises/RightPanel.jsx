import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function RightPanel({ styles, title, description }) {
  return (
    <Paper style={styles.Paper}>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='body1' style={{ marginTop: 20 }}>
        {description}
      </Typography>
    </Paper>
  );
}
