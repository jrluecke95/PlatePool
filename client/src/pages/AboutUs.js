import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Kendall from '../components/KendallCard'
import Jake from '../components/JakeCard'
import Andres from '../components/AndresCard'
import Willie from '../components/WillieCard'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

export default function AboutUs() {

  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper} style={{ borderBottom: '5px', borderStyle: 'solid'}}>
          <h2 style={{ fontFamily: 'sans-serif', color: "black"}}
          >About us</h2>
        </Paper>

          <Paper className={classes.paper} >
            <Kendall />
            <Jake />
            <Andres />
            <Willie />
          </Paper>
        </Grid>
      </Grid>
    
    </div>

    
  )
}
