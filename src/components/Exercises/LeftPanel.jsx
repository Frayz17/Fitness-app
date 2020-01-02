import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function LeftPanel({
  styles,
  exercises,
  category,
  onSelect,
  onDelete,
  onEdit
}) {
  return (
    <Paper style={styles.Paper}>
      {exercises.map(([group, exercises]) =>
        !category || category === group ? (
          <Fragment key={group}>
            <Typography variant='h5' style={{ textTransform: 'capitalize' }}>
              {group}
            </Typography>
            <List component='ul'>
              {exercises.map(({ id, title }) => (
                <ListItem key={id} button onClick={() => onSelect(id)}>
                  <ListItemText primary={title} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={onEdit(id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={onDelete(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null
      )}
    </Paper>
  );
}
