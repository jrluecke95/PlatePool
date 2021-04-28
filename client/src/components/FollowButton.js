import { Button } from '@material-ui/core'
import React from 'react'

const FollowButton = (props) => {

  const handleClick = (e) => {
    fetch('/api/v1/users/follow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.userId
      })
    })
    .then(res => res.json())
    .then(data => {
      
    })
  }

  return (
    <Button onClick={handleClick}>
      Follow
    </Button>
  )
}

export default FollowButton
