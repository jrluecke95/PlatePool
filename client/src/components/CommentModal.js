import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';

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
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CommentModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [ text, setText ] = React.useState('');
  const {id} = useParams();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO update this id with id being passed through props on click
    fetch(`/api/v1/plates/${id}/addcomment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text
      }),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        alert('comment posted');
        setText('')
      }
    })
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <TextField multiline rows={4} name="text" value={text} onChange={handleChange}></TextField>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Comment
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
