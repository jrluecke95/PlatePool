import { Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Modal, Paper, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react'



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

const PostSection = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [openComment, setOpenComment] = useState(false)
    const [openRating, setOpenRating] = useState(false)
    const [rating, setRating] = useState(0)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpenComment = () => {
        setOpenComment(true)
    }

    const handleCloseComment = () => {
        setOpenComment(false)
    }

    const handleOpenRating = () => {
        setOpenRating(true)
    }

    const handleCloseRating = () => {
        setOpenRating(false)
    }


    const orderModalBody = (
        <Grid style={{marginTop: '10%'}} container className={classes.paper2} spacing={2}>
            <Grid item xs={12}>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Order</h2>
            </Grid>
            <Grid style={{textAlign: 'center'}} md={6} xs={12}>
                <h3>Estimated Time:</h3>
                <p>10 minutes</p>
            </Grid>
            <Grid style={{textAlign: 'center'}} md={6} xs={12}>
                <h3>Quantity</h3>
                <p>23</p>
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

    const commentModalBody = (
        <Grid style={{marginTop: '10%'}} container className={classes.paper2} spacing={2}>
            <Grid item xs={12}>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Rate and Comment</h2>
            </Grid>
            <Grid item xs={12}>
                <FormControl style={{display: 'flex', justifyContent: 'center'}}>
                    <TextField style={{marginTop: '3%'}} name="comment" multiline row={4} placeholder="Comment" />
                    <Button type="submit" style={{marginTop: '5%'}} variant="contained" color="primary">Leave Comment</Button>
                </FormControl>
            </Grid>
        </Grid>
    )

    const ratingModalBody = (
        <Grid style={{marginTop: '10%'}} container className={classes.paper2} spacing={2}>
            <Grid item xs={12}>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Rating</h2>
                <Grid item xs={12}>
                    <FormControl style={{display: 'flex', justifyContent: 'center'}}>
                        <FormLabel style={{marginLeft:'46%', marginTop: '2%'}}>Rating</FormLabel>
                        <Rating style={{marginLeft: '39%', marginTop: '2%'}} name="simple-controlled" value={rating} onChange={(event, newValue) => {
                            setRating(newValue)
                        }} />
                        <Button type="submit" style={{ marginTop: '5%'}} variant="contained" color="primary">Leave Comment</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )


    return (
            <Grid item md={7} xs={12}>
                <Paper className={classes.paper}>
                    <h1>Food Section</h1>
                    <img style={{ width: '70%' }} src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" alt="food" />
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse id augue maximus, gravida
                    ligula pretium, pellentesque leo. Curabitur dignissim
                    sem purus. In hac habitasse platea dictumst. Ut massa
                    massa, sodales nec diam rhoncus, volutpat pretium libero.
                    Sed hendrerit nec lectus non rhoncus. Duis ac dolor sapien.
                    Vestibulum vitae tempus ligula. Quisque semper egestas
                    augue, vitae mollis augue commodo in. Ut iaculis, augue
                    in tempor aliquet, justo augue mattis nibh, a malesuada
                    velit dolor vel felis. Quisque sodales condimentum ipsum,
                    vitae consectetur ante scelerisque vel. Nulla mattis
                    maximus nulla, a rhoncus nunc ultrices at. Proin elementum
                    vel ex quis fringilla. Donec sodales tempus augue et
                        posuere. Pellentesque id turpis elit.</p>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <h4>Allergies</h4>
                            <p>Nuts, Eggs, Soy</p>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Quantity</h4>
                            <p>10</p>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Cuisine</h4>
                            <p>Latin</p>
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
                            <Button type="button" onClick={handleOpenComment} variant="contained" color="primary">Comment</Button>
                            <Modal style={{display: 'flex', justifyContent: 'center'}} open={openComment} onClose={handleCloseComment} >
                                {commentModalBody}
                            </Modal>
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="button" onClick={handleOpenRating} variant="contained" color="primary">Leave Rating</Button>
                            <Modal style={{display: 'flex', justifyContent: 'center'}} open={openRating} onClose={handleCloseRating} >
                                {ratingModalBody}
                            </Modal>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
    )
}

export default PostSection;
