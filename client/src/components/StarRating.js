import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));

export default function StarRating({rating}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
        </div>
    )
}
