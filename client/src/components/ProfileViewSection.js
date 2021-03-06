import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FollowButton from './FollowButton';
import FollowSection from './FollowSection';
import Post from './MiddleContainer/Post';
import StarRating from './StarRating';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const ProfileViewSection = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const [plates, setPlates] = useState([]);
    const [person, setPerson] = useState([])
    const [ rating, setRating ] = useState([null]);
    const {id} = useParams() 

    useEffect(() => {
        fetch(`/api/v1/plates/${id}/usersplates`)
            .then(res => res.json())
            .then(data => {
                setPlates(data)
            })
    }, [])

    useEffect(() => {
        fetch(`/api/v1/users/${id}/getuser`)
            .then(res => res.json())
            .then(data => {
                setPerson(data)
            })

        fetch(`/api/v1/users/${id}/userrating`)
            .then((res) => res.json())
            .then((data) => {
            setRating(data);
            })
    }, [])

    return (
        <>
            {user ? (
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <h1 style={{color: 'black'}}>{person.name}</h1>
                            <FollowButton id={id}/>
                            <StarRating rating={rating} />
                            {plates.length > 0 && plates.map((plate) => (
                                
                                <Post
                                    id={plate.id}
                                    name={plate.name}
                                    username={person.name}
                                    description={plate.description}
                                    profilePic={person.profilePic}
                                />
                            ))}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><FollowSection /></Paper>
                    </Grid>
                </Grid>
            ) : (
                'Loading'
            )}
        </>
    )
}

export default ProfileViewSection
