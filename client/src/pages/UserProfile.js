import { Button, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import HomeFollowSection from '../components/RightContainer/HomeFollowSection';
import { Avatar } from "@material-ui/core";
import UserPost from '../components/UserPost';
import StarRating from '../components/StarRating';
import { NavLink } from 'react-router-dom';
import FlipMove from "react-flip-move";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  userPost: {
    height: '100vh',
    overflow: 'scroll',
  }
}));

export const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [ plates, setPlates ] = useState([]);
  const [ rating, setRating ] = useState([null]);


  const getData = () => {
    fetch(`/api/v1/plates/ownplates`)
    .then(res => res.json())
    .then(data => {
      setPlates(data)
    })

    fetch(`/api/v1/users/${user.id}/userrating`)
    .then((res) => res.json())
    .then((data) => {
    setRating(data);
    });
  }
  useEffect(() => {
    getData()
}, [])

  return (
    <>
    {console.log(user)}
      {user ? (
        <Grid container spacing={2}>
        <Grid item md={8} xs={12} >
          <Paper className={classes.paper}>
              <Avatar src={user.profilePic} style={{height: '20vh', width: '20vh'}}/>
              <StarRating rating={rating}/>
              <h1 style={{color: 'black'}}>{user.name.toUpperCase()} <Button color="inherit" component={NavLink} to='/editprofile'>Edit profile</Button></h1>
            <FlipMove 
            className={classes.userPost}>
            {plates.length > 0 && plates.map((plate) => (
          <UserPost
            id={plate.id}
            name={plate.name}
            price={plate.price}
            description={plate.description}
            cuisine={plate.cuisine}
            quantity={plate.quantity}
            allergenInfo={plate.allergenInfo}
            isForSale={plate.isForSale}
            username={user.name}
            profilePic={user.profilePic}
            foodPic={plate.foodPic}
            onSave={getData}
          />
        ))}
            </FlipMove>
            
            </Paper>
        </Grid>
        <Grid item md={4} xs={8}>
          <Paper className={classes.paper}><HomeFollowSection /></Paper>
        </Grid>
      </Grid>
      ) : (
        'Loading'
      )}
    </>
  )
}
