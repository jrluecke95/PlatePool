import { Grid, List, ListItem, ListItemText, ListSubheader, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root2: {
        width: '110%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

const SearchPostComments = () => {
    const [userPlate, setUserPlate] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/v1/plates/${id}/usersplates`)
            .then(res => res.json())
            .then(data => {
                setUserPlate(data)
                console.log(data, "word")
            })
    }, [])


    const classes = useStyles();
    return (
        <Grid style={{display: 'flex', flexDirection: 'column'}} item md={5} xs={12}>
            <Paper className={classes.paper}>
                <Typography style={{ color: 'black' }} variant="h4">
                    Comments
                <List style={{ marginTop: '5%' }} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul} >
                            {['comment', 'comment', 'comment', 'comment', '5', '6', '7', '8', '9'].map((item) => (
                                <ListItem key={`item--${item}`}>
                                    <a href={`/`}><ListItemText primary={`${item}`} /></a>
                                </ListItem>
                            ))}
                        </ul>
                    </List>
                </Typography>
            </Paper>

            <Paper style={{marginTop: '4%'}} className={classes.paper}>
                <Typography style={{ color: 'black' }} variant="h4">
                    Other Dishes by User
                <List style={{ marginTop: '5%' }} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul} >
                            {userPlate.map((plate) => (
                                <ListItem key={`item--${plate}`}>
                                    <a style={{textDecoration: 'none'}} href={`/`}><ListItemText primary={`${plate.name}`} /></a>
                                </ListItem>
                            ))}
                        </ul>
                    </List>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SearchPostComments;