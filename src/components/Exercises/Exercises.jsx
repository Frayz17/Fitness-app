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
  }
}) => (
  <Grid container spacing={1}>
    <Grid item sm>
      <LeftPanel
        styles={styles}
        exercises={exercises}
        onSelect={onSelect}
        category={category}
      />
    </Grid>
    <Grid item sm>
      <RightPanel styles={styles} title={title} description={description} />
    </Grid>
  </Grid>
);
