import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions';
import Loading from './Loading'

const useStyles = makeStyles({
    toolBar: {
        backgroundColor: 'black'
    }
});

export default function Navbar() {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [ userStatus, setUserStatus ] = useState('LOADING');

    const logout = () => {
        fetch('/api/v1/users/logout')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert(data.success);
                    dispatch(setUser(null));
                    history.push('/login');
                }
            });
    };

      // checking to see if user logged in - if so, set up redux with user data so that page refreshes dont reset login status
    useEffect(() => {
        fetch('/api/v1/users/current')
        .then(res => res.json())
        .then(data => {
        if (!data.error) {
            dispatch(setUser(data))
        }
        setUserStatus('CHECKED')
        })
    }, [])

    return (
        <div>
            {userStatus === 'LOADING' && (
                <Loading animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Loading>
            )}
            {userStatus === 'CHECKED' &&
            <AppBar position="static">
                <Toolbar classes={{
                    root: classes.toolBar,
                }} variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" >
                        <Button color="inherit" component={NavLink} to="/">
                            PlatePool
                        </Button>
                    </Typography>
                    {user ? (
                        <>
                        {user.name}
                            <Button component={NavLink} to="/profile">
                            <i class="far fa-user"></i>
                            </Button>
                            <Button color="inherit" onClick={logout}>
                                Logout
                            </Button>
                        </>
                        ) : (
                        <>
                            <Button color="inherit" component={NavLink} to="/login">
                                Login
                            </Button>
                            <Button color="inherit" component={NavLink} to="/register">
                                Register
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>}
        </div>
    )
}
