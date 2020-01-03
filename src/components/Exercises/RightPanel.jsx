import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from 'components/Form';

export default function RightPanel({ styles, exercise, editMode, onEdit }) {
  return (
    <Paper style={styles.Paper}>
      {editMode ? (
        <Form onSubmit={onEdit} exercise={exercise} />
      ) : (
        <>
          <Typography variant="h4">{exercise.title || 'Welcome'}</Typography>
          <Typography variant="body1" style={{ marginTop: 20 }}>
            {exercise.description || 'Choose Exercise'}
          </Typography>
        </>
      )}
    </Paper>
  );
}
