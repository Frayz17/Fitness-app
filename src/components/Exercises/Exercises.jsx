import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import styles from './styles';

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onEdit,
  editMode
}) => (
  <Grid container spacing={1}>
    <Grid item sm>
      <LeftPanel
        styles={styles}
        exercises={exercises}
        onSelect={onSelect}
        category={category}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </Grid>
    <Grid item sm>
      <RightPanel
        styles={styles}
        editMode={editMode}
        title={title}
        description={description}
      />
    </Grid>
  </Grid>
);
