import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/v1/plates/getall')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
    ;
  }, []);

  return (
    <div className="feed">
      <h2>What's Cookin'</h2>
      <FlipMove>
        {posts.map((post) => (
          <Post
            id={post.id}
            name={post.name}
            username={post.User.name}
            userId={post.User.id}
            userStreet ={post.User.street}
            userCity = {post.User.city}
            userState = {post.User.state}
            userZipcode = {post.User.zipcode}
            description={post.description}
            profilePic={post.User.profilePic}
            price={post.price}
          />
        ))}
      </FlipMove>
      </div>
    
  );
}

export default Feed;