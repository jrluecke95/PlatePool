import React, { useEffect, useState } from "react";
import PostBox from "./PostBox";
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
      <div className="feed__header">
        <h2>Activity</h2>
      </div>

      <PostBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            username={post.User.name}
            userStreet ={post.User.street}
            userCity = {post.User.city}
            userState = {post.User.state}
            userZipcode = {post.User.zipcode}
            description={post.description}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;