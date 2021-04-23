import { Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import HomeFollowSection from '../components/RightContainer/HomeFollowSection';
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import Post from '../components/MiddleContainer/Post';
import StarRating from '../components/StarRating';

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
  const [ plates, setPlates ] = useState([]);


  useEffect(() => {
    fetch(`/api/v1/plates/ownplates`)
    .then(res => res.json())
    .then(data => {
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
            <StarRating rating={user.rating}/>
            {plates.length > 0 && plates.map((plate) => (
          <Post
            key={plate.id}
            name={plate.name}
            username={user.name}
            dsecription={plate.description}
          />
        ))}
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
