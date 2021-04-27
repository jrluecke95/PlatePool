import { Button, List, ListItem, ListItemText, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

const HomeFollowSection = () => {
    // const {id} = useSelector((state) => state.user);
    const user = useSelector((state) => state.user)
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() => {
        user ? (
            fetchFollowers()
        ) : (
            console.log('login')
        )
    }, [])

    useEffect(() => {
        user ? (
            fetchFollowing()
        ) : (
            console.log('login')
        )
    }, [])

    const fetchFollowers = () => {
        fetch(`/api/v1/users/${user.id}/followers`)
            .then((res) => res.json())
            .then((data) => {
                setFollowers(data)
            })
    }

    const fetchFollowing = () => {
        fetch(`/api/v1/users/${user.id}/following`)
            .then((res) => res.json())
            .then((data) => {
                setFollowing(data)
            })
    }

    



    const classes = useStyles();
    return (
        <div>
            {
                user ? (
                    <>
                        <div className='right-container'>
                        <Typography style={{color: 'black'}} variant="h4">
                            People you Know
                <List style={{ marginTop: '5%' }} className={classes.root} subheader={<li />}>
                                {['Followers'].map((sectionId) => (
                                    <li key={`section-${sectionId}`} className={classes.listSection} >
                                        <ul className={classes.ul} >
                                            <ListSubheader><h3 style={{ color: 'black' }}>{`${sectionId}`}</h3></ListSubheader>
                                            {followers.map((follower) => (
                                                <ListItem key={`item-${sectionId}-${follower}`}>
                                                    <a href={`/${follower.id}/proSection`}><ListItemText primary={`${follower.name}`} /></a>
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </List>
                            <List style={{ marginTop: '5%' }} className={classes.root} subheader={<li />}>
                                {['Following'].map((sectionId) => (
                                    <li key={`section-${sectionId}`} className={classes.listSection} >
                                        <ul className={classes.ul} >
                                            <ListSubheader><h3 style={{ color: 'black' }}>{`${sectionId}`}</h3></ListSubheader>
                                            {following.map((followed) => (
                                                <ListItem key={`item-${sectionId}-${followed}`}>
                                                    <a href={`/${followed.id}/proSection`}><ListItemText primary={`${followed.name}`} /></a>
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </List>
                        </Typography>
                        </div>
                    </>
                ) : (
                    <>
                        <p style={{color: 'black'}}>Login in to see connections</p>
                        <Button color="inherit" component={NavLink} to="/login">
                            Login
                        </Button>
                    </>
                )}
        </div>
    )
}

export default HomeFollowSection