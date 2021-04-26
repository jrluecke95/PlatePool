import { List, ListItem, ListItemText, ListSubheader, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'



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


const FollowSection = () => {

    const user = useSelector((state) => state.user)
    const [person, setPerson] = useState(null)
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/v1/users/${id}/getuser`)
            .then(res => res.json())
            .then(data => {
                setPerson(data)
                console.log(data)
            })

            fetch(`/api/v1/users/${id}/followers`)
            .then((res) => res.json())
            .then((data) => {
                setFollowers(data)
            })

            fetch(`/api/v1/users/${id}/following`)
            .then((res) => res.json())
            .then((data) => {
                setFollowing(data)
            })
    }, [])

    



    const classes = useStyles();
    return (
        <div>
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
    )
}

export default FollowSection;