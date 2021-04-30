import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, FormControl, Grid, TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    position: 'absolute',
    width: 600,
    '@media (max-width:414px)': {
      width: '300px',
    },
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CommentModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const { id } = useParams();

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

  const commentModalBody = (
    <Grid style={{ marginTop: '10%' }} container className={classes.paper2} spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Rate and Comment</h2>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <FormControl style={{ display: 'flex', justifyContent: 'center' }}>
            <TextField style={{ marginTop: '3%' }} name="comment" multiline row={4} placeholder="Comment" onChange={handleChange} />
            <Button type="submit" style={{ marginTop: '5%' }} variant="contained" color="primary">Leave Comment</Button>
          </FormControl>
        </form>

      </Grid>
    </Grid>
  )

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen} type="button">
        Add Comment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {commentModalBody}
      </Modal>
    </>
  );
}
