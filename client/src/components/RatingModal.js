import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

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
}));

export default function RatingModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [score, setScore] = React.useState("");
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setScore(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO update this id with id being passed through props on click
    fetch(`/api/v1/users/1/rate`, {
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
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <FormControl style={{ marginRight: "5%", width: "40%" }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Rating</FormLabel>
            <RadioGroup
              aria-label="ating"
              name="rating"
              value={score}
              onChange={handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="1"
              />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
              />
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Rating
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
