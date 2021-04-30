import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Feed from '../components/MiddleContainer/Feed';



export default function AltHome() {

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
  },

  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  }
}));



  const classes = useStyles();

  return (
    <div>
      
      <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper2}>
            <Feed />
            </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      
    </div>
  )
}