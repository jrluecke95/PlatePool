import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        PlatePool
                    </Typography>
                    <Button component={NavLink} to="/login" color="inherit">Login</Button>
                    <Button component={NavLink} to="/register" color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
