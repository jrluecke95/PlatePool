import { Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import HomeFollowSection from '../components/RightContainer/HomeFollowSection'

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
  const [ plates, setPlates ] = useState('');


  useEffect(() => {
    fetch(`/${user.id}/getusersplates`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPlates(data)
    })
  }, [])

  return (
    <>
      {user ? (
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h1>{user.name}</h1>
            {/* {plates.map(plate => {
              return (
                <p>{plate}</p>
              )
            })} */}
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><HomeFollowSection /></Paper>
        </Grid>
      </Grid>
      ) : (
        'Loding'
      )}
    </>
  )
}
