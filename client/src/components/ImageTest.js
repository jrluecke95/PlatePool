import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const ImageTest = () => {
  const [image, setImage] = useState('');
  const user = useSelector((state) => state.user);

  function handleChange(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      setImage(reader.result)
    }
    reader.readAsDataURL(file);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/v1/users/setProfilePic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            profilePic: image
        }),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" id="myFile" name="filename" onChange={handleChange}/>
        <Button type="submit">Submit</Button>
      </form>
      <img src={user.profilePic} alt="profile pic"/>
    </>
    
  )
}