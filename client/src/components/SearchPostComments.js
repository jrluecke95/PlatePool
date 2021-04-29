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

const SearchPostComments = ({plate}) => {
    const [userPlate, setUserPlate] = useState([])
    const [userComment, setUserComment] = useState([])
    const [plateId, setPlateId] = useState([])

    // console.log(plate.UserId)
    useEffect(() => {
        if (!plate) {
            return 
        }

        fetch(`/api/v1/plates/${plate.UserId}/usersplates`)
            .then(res => res.json())
            .then(data => {
                setUserPlate(data)
            })


        fetch(`/api/v1/plates/${plate.id}/getcomments`)
            .then(res => res.json())
            .then(data => {
                setUserComment(data)
            })
    }, [plate])

    const classes = useStyles();

    if (!plate) {
        return ''
    }


    return (
        <Grid style={{display: 'flex', flexDirection: 'column'}} item md={5} xs={12}>
            <Paper className={classes.paper}>
                <Typography style={{ color: 'black' }} variant="h4">
                    Comments
                <List style={{ marginTop: '5%' }} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul} >
                            {userComment.map((comment) => (
                                <ListItem key={`item--${comment}`}>
                                    <ListItemText primary={`${comment.text}`} />
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