import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions';

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


    return (
        <div>
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
                        {user.username}
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
            </AppBar>
        </div>
    )
}
