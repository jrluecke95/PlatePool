import { Button, List, ListItem, ListItemText, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '110%',
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
    const user = useSelector((state) => state.user);
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() => {
        fetch(`/api/v1/${user}/followers`)
            .then((res) => res.json())
            .then((data) => {
                setFollowers(data)
            })
    }, [])

    useEffect(() => {
        fetch(`/api/v1/${user}/following`)
            .then((res) => res.json())
            .then((data) => {
                setFollowing(data)
            })
    }, [])



    const classes = useStyles();
    return (
        <div>
            {
                user ? (
                    <>
                        <Typography variant="h4">
                            People you Know
                <List style={{ marginTop: '5%' }} className={classes.root} subheader={<li />}>
                                {['Followers'].map((sectionId) => (
                                    <li key={`section-${sectionId}`} className={classes.listSection} >
                                        <ul className={classes.ul} >
                                            <ListSubheader><h3 style={{ color: 'black' }}>{`${sectionId}`}</h3></ListSubheader>
                                            {followers.map((follower) => (
                                                <ListItem key={`item-${sectionId}-${follower}`}>
                                                    <ListItemText primary={`${follower}`} />
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
                                                    <ListItemText primary={`${followed}`} />
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </List>
                        </Typography>
                    </>
                ) : (
                    <>
                        <Button>Login</Button>
                    </>
                )}
        </div>
    )
}

export default HomeFollowSection