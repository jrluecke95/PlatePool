import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import TimeLogic from './TimeLogic';


const REACT_APP_KEY = process.env.REACT_APP_KEY

export default function Directions({postStreet, postCity, postState, postZipcode}) {
    const user = useSelector((state) => state.user);
    const [time, setTime] = useState(null);

    let userAddress;
    let postAddress;
    
    if(user) {
        userAddress = `${user.street}${user.city}${user.state}${user.zipcode}`
        postAddress = `${postStreet}${postCity}${postState}${postZipcode}`
    }
    
    useEffect(() => {
        fetch(`https://www.mapquestapi.com/directions/v2/route?key=${REACT_APP_KEY}&from=${userAddress}&to=${postAddress}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`)
          .then((res) => res.json())
          .then((data) => {
            setTime(data);
          });
      }, []);
    
    
  
 


    
      

    return (
        <div>
            {time && time.route.formattedTime && (
                <TimeLogic userAddress={userAddress} postAddress={postAddress} postState={postState} time={time.route.formattedTime}/>
            )}
        </div>
    )
}
