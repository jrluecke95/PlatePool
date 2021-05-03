import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JakeImg from './aboutPics/jake.jpg'


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});

export default function KendallCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Jake"
        height="350"
        image={JakeImg}
        title="Jake"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Jake Leuke
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{display: 'flex', justifyContent: 'center'}}>
    <a class="mx-2" href="https://github.com/jrluecke95"><i class="fab fa-github"></i></a>
    <a class="mx-2" href="https://www.linkedin.com/in/jake-luecke/"><i class="fab fa-linkedin"></i></a>
    </CardActions>
  </Card>
    
  )
}
