import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './LeftContainer.css';
import StarRating from '../StarRating';


export default function LeftContainer() {
    const user = useSelector((state) => state.user);
    const [plates, setPlates] = useState([]);



    useEffect(() => {
        fetch('/api/v1/plates/:id/getuserplates')
            .then((res) => res.json())
            .then((data) => {
            setPlates(data);
            });
        }, []);

    return (
        <div className='leftBox'>
            {user ? (
                <>
                {console.log(user)}
                    
                    <div className="left1">
                        <Button component={NavLink} to="/CreatePlate" className="createPlateBtn"><strong>Create Plate </strong>
                            <i className="fas fa-utensils"></i></Button>
                    </div>
                    <div className="left2">
                        <Button component={NavLink} to="/profile">
                            <h2><strong>{user.name} </strong></h2>
                        </Button>
                            <p></p>
                        
                        <h4>Member Since: {moment(user.createdAt).format("MMM Do YY")}</h4>
                        <div>Rating:
                            <div className="starRating">
                                <StarRating />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="left3">
                        <p>Plates created: {plates.length > 0 ? plates.length : 'None'}</p>
                        <p>Plates purchased: </p>
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
