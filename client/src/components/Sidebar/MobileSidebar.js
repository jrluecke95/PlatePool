import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions';
import { useHistory } from "react-router";
import Loading from '../Loading'
import Button from '@material-ui/core/Button';



export default function Home() {

  
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [ userStatus, setUserStatus ] = useState('LOADING');
  
  const logout = () => {
    fetch('/api/v1/users/logout')
        .then((res) => res.json())
        .then((data) => {
            console.log('working')
            if (data.success) {
                alert(data.success);
                dispatch(setUser(null));
                history.push('/login');
            }
        });
};

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

      
      <div className='sidebar'>
          {userStatus === 'LOADING' && (
              <Loading animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Loading>
            )}
          {userStatus === 'CHECKED' &&(
            <>
          

            <div className='sidebarHeader'>
            <h1>PlatePool</h1>
            </div>
            <Menu >
            
              {user ? (
              <>
                <div className="menu-btn">
                <Button variant="contained" size="large" className="menu-item" href="/">
                  Home
                </Button>
                    <br />
                <Button variant="contained" size="large" className="menu-item" href="/profile">
                  My Profile
                </Button>
                    <br />
                <Button variant="contained" size="large" className="menu-item" href="/CreatePlate">
                  Create Plate
                </Button>

                </div>
                <br />
                <Button variant="contained" size="large" color='secondary' onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <div className='logout-menu'>
                  <Button variant="contained" color="primary" href="/login">
                    Login
                  </Button>
                    <br />
                  <Button variant="contained" color="primary" href="/register">
                    Register
                  </Button>
                </div>
              </>
            
            )}
            </Menu>
          </>
          )}
          
    
    </div>
  );
};
