import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './LeftContainer.css';
import StarRating from '../StarRating';



export default function LeftContainer() {
    const user = useSelector((state) => state.user);
    const [plates, setPlates] = useState([]);
    const [rating, setRating] = useState(null);


    
    useEffect(() => {
        if (user) {
            fetch(`/api/v1/plates/${user.id}/usersplates`)
            .then((res) => res.json())
            .then((data) => {
            setPlates(data);
            });

            fetch(`/api/v1/users/${user.id}/userrating`)
            .then((res) => res.json())
            .then((data) => {
            setRating(data);
            });
        } 
        }, []);

    return (
        <div className='leftBox'>
            {user ? (
                <>                  
                    <div className="left1">
                        <Button component={NavLink} to="/CreatePlate" className="createPlateBtn"><strong>Create Plate </strong>
                            <i className="fas fa-utensils"></i>
                        </Button>
                    </div>
                    <div className="left2">
                        <div>
                        <Button className="usernameBtn" component={NavLink} to="/profile">
                            <Avatar style={{width: '25vh', height: '25vh'}} src={user.profilePic}/>
                        </Button>
                        <Button className="usernameBtn" component={NavLink} to="/profile">
                            <h2><strong>{user.name} </strong></h2>
                        </Button>
                        </div>
                        <p className="userLocation"><strong>{`${user.city}, ${user.state}`}</strong></p>
                        
                        <h4>Member Since: {moment(user.createdAt).format("MMM Do YY")}</h4>
                        <div><strong>Rating:</strong>
                            <div className="starRating">
                                <StarRating rating={rating}/>
                            </div>
                        </div>
                    </div>
                    <div className="left3">
                        <p><strong>Plates created: {plates.length > 0 ? plates.length : 'None'}</strong></p>
                    </div>
                    <div>
                    </div>
                    
                </>
            ) : (
                <div>
                    <div className="left2">
                        <p>Hungry?</p>
                    </div>
                    <div className="left1">
                        <Button color="inherit" component={NavLink} to="/login">
                            Login
                        </Button>
                        <i className="fas fa-utensils"></i>
                    </div>

                </div>
            )}
        </div>
    )
}
