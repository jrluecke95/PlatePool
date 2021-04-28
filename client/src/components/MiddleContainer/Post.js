import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
// import EditIcon from '@material-ui/icons/Edit';
// import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Directions from "../Directions";


const Post = forwardRef(
  ({ name, username, userId, description, userStreet, userCity, userState, userZipcode, profilePic }, ref) => {

    return (
      <div className="post" key={ref}>
        <div className="post__avatar">
          <Avatar src={profilePic} />
        </div>
        <div className="post__body" style={{color: 'white', backgroundColor: '#092F37'}}>
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              <p className="plateName">{name}</p>{" "}
                <Button
                component={NavLink}
                to={`/${userId}/proSection`}
                type="submit">
                  <span className="post__headerSpecial">
                  @
                  {username}
                </span>
                </Button>
                
                
                <p className="directions"><Directions postStreet={userStreet} postCity={userCity} postState={userState} postZipcode={userZipcode} /></p>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p className="plateDescription"><strong>{description}</strong></p>
            </div>
          </div>
          <img src='food' alt="" />
          <div className="post__footer">
            {/* <Button type="submit" href="#text-buttons" color="primary">
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" /> */}
            <Button 
            component={NavLink} to="/:id/plate"
            type="submit">
            <div className="listingBtn">Go To Listing <i class="fas fa-arrow-circle-right"></i></div>
          </Button>

          </div>
          
        </div>
      </div>
    );
  }
);

export default Post;