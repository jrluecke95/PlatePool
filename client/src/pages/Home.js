import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import HomeFollowSection from '../components/RightContainer/HomeFollowSection';
import LeftContainer from '../components/LeftContainer/LeftContainer';
import Feed from '../components/MiddleContainer/Feed';



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


export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><LeftContainer /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Feed /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><HomeFollowSection /></Paper>
        </Grid>
      </Grid>
    </div>
  )
}


