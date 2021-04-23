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
            {plates.length > 0 && plates.map(plate => {
                  return (
                    <div className="post" key={plate.id}>
                      <div className="post__avatar">
                        <Avatar />
                      </div>
                      <div className="post__body">
                        <div className="post__header">
                          <div className="post__headerText">
                            <h3>
                              {plate.name}{" "}
                              <span className="post__headerSpecial">
                                @
                                {user.name}
                              </span>
                            </h3>
                          </div>
                          <div className="post__headerDescription">
                            <p>{plate.description}</p>
                          </div>
                        </div>
                        <img alt="pic of meal" />
                        <div className="post__footer">
                          <ChatBubbleOutlineIcon fontSize="small" />
                          <RepeatIcon fontSize="small" />
                          <FavoriteBorderIcon fontSize="small" />
                          <PublishIcon fontSize="small" />
                        </div>
                      </div>
                    </div>
              )
            })}
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
