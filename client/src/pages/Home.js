import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <h1>Home</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Left</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Center</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Right</Paper>
        </Grid>
      </Grid>
    </div>
  )
}


