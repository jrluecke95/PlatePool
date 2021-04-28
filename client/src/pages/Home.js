import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import HomeFollowSection from '../components/RightContainer/HomeFollowSection';
import LeftContainer from '../components/LeftContainer/LeftContainer';
import Feed from '../components/MiddleContainer/Feed';
// import Sidebar from '../components/Sidebar/MobileSidebar'




const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '@media (max-width:960px)': {
      display:'none'
    }
  },

  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },

  paper3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '@media (max-width:960px)': {
      display:'none'
    }
  },
}));



export default function Home() {
  const classes = useStyles();

  return (
    <div>
    {/* <Sidebar /> */}
      
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper1}>
            <div className='leftSide'>
            <LeftContainer />
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}
        
        >
          <Paper className={classes.paper2}>
            <Feed />
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper3}>
            <div className='rightSide'>
            <HomeFollowSection />
            </div>
            </Paper>
        </Grid>
      </Grid>
      
    </div>
  )
}


