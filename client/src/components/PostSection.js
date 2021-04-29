import { Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Modal, Paper, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import CommentModal from './CommentModal';

import RatingModal from './RatingModal';




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
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const PostSection = ({plate}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    // const [openRating, setOpenRating] = useState(false)
    // const [rating, setRating] = useState(0)
    // const [plate, setPlate] = useState({
    //     name: '',
    //     price: 0,
    //     description: '',
    //     cuisine: '',
    //     quantity: 0,
    //     allergenInfo: '',
    //     UserId: 0
    // })

    // const {id} = useParams()

    // useEffect(() => {
    //     fetch(`/api/v1/plates/${id}/plate`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setPlate(data)
    //         })
    // }, [])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    if (!plate) {
        return ''
    }


    const orderModalBody = (
        <Grid style={{marginTop: '10%'}} container className={classes.paper2} spacing={2}>
            <Grid item xs={12}>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Order</h2>
            </Grid>
            <Grid style={{textAlign: 'center'}} item md={6} xs={12}>
                <h3>Estimated Time:</h3>
                <p>10 minutes</p>
            </Grid>
            <Grid style={{textAlign: 'center'}} item md={6} xs={12}>
                <h3>Quantity</h3>
                <p>{plate.quantity}</p>
            </Grid>
            <Grid item xs={12}>
                <FormControl style={{marginTop: '3%', display: 'flex', justifyContent: 'center'}}>
                    <h3 style={{display: 'flex', justifyContent: 'center'}}>How many plates?</h3>
                    <TextField style={{marginTop: '-3%'}} type="number"  name="quantity" label="quantity" />
                    <Button type="submit" style={{ marginTop: '5%'}} variant="contained" color="primary">Order</Button>
                </FormControl>
            </Grid>
        </Grid>
    )


    


   


    return (
            <Grid item md={7} xs={12}>
                <Paper className={classes.paper}>
                    <h1 style={{color: 'darkgray'}}>{plate.name}</h1>
                    <img style={{ width: '70%' }} src={plate.foodPic} alt="food" />
                    <h4>Description</h4>
                    <p>{plate.description}</p>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <h4>Allergies</h4>
                            <p>{plate.allergenInfo}</p>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Quantity</h4>
                            <p>{plate.quantity}</p>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Cuisine</h4>
                            <p>{plate.cuisine}</p>
                        </Grid>
                    </Grid>
                    <Grid style={{marginTop: '4%', marginBottom: '2%'}} container spacing={2}>
                        <Grid item xs={4}>
                            <Button type="button" onClick={handleOpen} variant="contained" color="primary">Order Now</Button>
                            <Modal style={{display: 'flex', justifyContent: 'center'}} open={open} onClose={handleClose} >
                                {orderModalBody}
                            </Modal>
                        </Grid>
                        <Grid item xs={4}>
                            <CommentModal />
                        </Grid>
                        <RatingModal UserId={plate.UserId}/>
                    </Grid>
                </Paper>
            </Grid>
    )
}

export default PostSection;
