import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup
} from "@material-ui/core";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},
}));

export default function RatingModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // const [score, setScore] = React.useState("");
  const [score, setScore] = useState(0)
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (e) => {
  //   setScore(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO update this id with id being passed through props on click
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
              <FormLabel style={{ marginLeft: '46%', marginTop: '2%' }}>Rating</FormLabel>
              <Rating style={{ marginLeft: '39%', marginTop: '2%' }} name="simple-controlled" value={score} onChange={(event, newValue) => {
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
    <Grid item xs={4}>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">Leave Rating</Button>
      <Modal style={{ display: 'flex', justifyContent: 'center' }} open={open} onClose={handleClose} >
        {body}
      </Modal>
    </Grid>
  );
}
