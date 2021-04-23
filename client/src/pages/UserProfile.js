import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>{user.name}</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Right</Paper>
      </Grid>
    </Grid>
  )
}
