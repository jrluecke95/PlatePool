import { Avatar, Grid, List, ListItem, ListItemText, ListSubheader, makeStyles, Paper, Typography } from '@material-ui/core';
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
            <Paper className={classes.paper} >
                <Typography style={{ color: 'black' }} variant="h4">
                    Comments
                <List style={{ marginTop: '5%', maxWidth: '100%', backgroundColor: '#092F37', border: '3px solid black'}} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul}>
                            {userComment.map((comment) => (
                                <ListItem key={`item--${comment}`} >
                                    <Paper style={{width: '100%', backgroundColor: '#C7DDE2'}} variant="outlined" >
                                        <Grid container spacing={2}>
                                            <Grid item md={8} xs={9}>
                                                <a href={`/${comment.User.id}/proSection`} style={{textDecoration: 'none', fontSize: '.7em', marginLeft: '2%'}}>{comment.User.name}</a>
                                            </Grid>
                                            <Grid item md={4} xs={3}>
                                                <Avatar style={{marginTop: '5%'}} src={comment.User.profilePic} />
                                            </Grid>
                                            <Grid item md={12} xs={12} >
                                                <ListItemText style={{marginLeft: '2%'}} primary={comment.text} />
                                            </Grid> 
                                        </Grid>
                                    </Paper>
                                </ListItem>
                            ))}
                        </ul>
                    </List>
                </Typography>
            </Paper>

            <Paper style={{marginTop: '4%'}} className={classes.paper}>
                <Typography style={{ color: 'black' }} variant="h4">
                    Other Dishes by User
                <List style={{ marginTop: '5%', maxWidth: '100%', backgroundColor: '#092F37', border: '3px solid black' }} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul} >
                            {userPlate.map((Userplate) => (
                                plate.name !== Userplate.name && (
                                <ListItem key={`item--${Userplate}`}>
                                    <Paper style={{width: '100%', backgroundColor: '#C7DDE2'}}>
                                        <Grid container spacing={2}>
                                            <Grid item md={9} xs={9}>
                                                <a style={{textDecoration: 'none'}} href={`/${plate.id}/plate`}><ListItemText style={{marginLeft: '5%'}} primary={Userplate.name} /></a>
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <ListItemText primary={Userplate.price} />
                                            </Grid>
                                        </Grid>
                                    </Paper>

                                </ListItem>
                                )
                            ))}
                        </ul>
                    </List>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SearchPostComments;