import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import EditIcon from '@material-ui/icons/Edit';
import Directions from "../Directions";

const Post = forwardRef(
  ({ name, username, description, userStreet, userCity, userState, userZipcode }, ref) => {
    return (
      <div className="post" key={ref}>
        <div className="post__avatar">
          <Avatar src='profpic' />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}{" "}
                <span className="post__headerSpecial">
                  @
                  {username}
                </span>
                <p><Directions postStreet={userStreet} postCity={userCity} postState={userState} postZipcode={userZipcode}/></p>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{description}</p>
            </div>
          </div>
          <img src='food' alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;