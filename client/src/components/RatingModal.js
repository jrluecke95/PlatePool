import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  FormControl,
  FormLabel,
  Grid
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper2: {
    position: 'absolute',
    width: 600,
    '@media (max-width:414px)': {
      width:'300px',
    },
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  rate: {
    marginLeft: '39%',
    marginTop: '2%',
    '@media (max-width:414px)': {
      marginLeft:'25%',
    },
  },
  label: {
    marginLeft: '46%', 
    marginTop: '2%',
    '@media (max-width:414px)': {
      marginLeft:'42%',
    },
  },
}));

export default function RatingModal(props) {
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [score, setScore] = useState(0)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/users/${props.UserId}/rate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: score,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("rating posted");
        }
      });
  };

  const body = (
    <Grid style={{ marginTop: '10%' }} container className={classes.paper2} spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Rating</h2>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <FormControl style={{ display: 'flex', justifyContent: 'center' }}>
              <FormLabel className={classes.label}>Rating</FormLabel>
              <Rating className={classes.rate} name="simple-controlled" value={score} onChange={(event, newValue) => {
                setScore(newValue)
              }} />
              <Button type="submit" style={{ marginTop: '5%' }} variant="contained" color="primary">Leave Rating</Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid item sm={4} xs={12}>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">Leave Rating</Button>
    <Grid item xs={4}>
      {user ? (
        <Button type="button" onClick={handleOpen} variant="contained" color="primary">Leave Rating</Button>
        ) : (
        <Button type="button" variant="contained" color='primary'>Log in to Rate</Button>
      )}
      <Modal style={{ display: 'flex', justifyContent: 'center' }} open={open} onClose={handleClose} >
        {body}
      </Modal>
    </Grid>
  );
}
