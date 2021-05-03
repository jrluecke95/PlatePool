import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KendallImg from './aboutPics/kendall.jpeg'


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});

export default function KendallCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.root} elevation={3}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="kendall"
        height="350"
        src={KendallImg}
        title="kendall"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Kendall Oliver
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{display: 'flex', justifyContent: 'center'}}>
    <a class="mx-2" href="https://github.com/kndllransom"><i class="fab fa-github"></i></a>
    <a class="mx-2" href="https://www.linkedin.com/in/kendalloliver/"><i class="fab fa-linkedin"></i></a>



      {/* <Button size="small" color="primary">
        Share
      </Button> */}
      
    </CardActions>
  </Card>
    
  )
}
