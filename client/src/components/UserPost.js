import React, { forwardRef, useState } from "react";
import "../components/MiddleContainer/Post.css";
import { Avatar, Button } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PublishIcon from "@material-ui/icons/Publish";
import EditIcon from '@material-ui/icons/Edit';


const UserPost = forwardRef(
  ({ id, name, price, username, description, cuisine, quantity, allergenInfo, isForSale }, ref) => {
    const [ editing, setEditing ] = useState(false);
    const [form, setForm ] = useState({
      name,
      price,
      description,
      cuisine,
      quantity,
      allergenInfo,
      isForSale
    })

    const toggleEdit = () => {
      setEditing(!editing)
    }

    const saveForm = (id) => {
      
      fetch(`/api/v1/plates/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(form),
      })
      .then((res) => res.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          alert('plate updated!');
          
        }
      })
    }

    return (
      <div className="post" key={ref}>
        <div className="post__avatar">
          <Avatar src='profpic' />
        </div>
        <div className="post__body">
          {editing ? (
            <div className="post__header">
            <div className="post__headerText">
              <h3>
              <input defaultValue={name} type='text'></input>
                {" "}
                <span className="post__headerSpecial">
                  @
                  {username}
                </span>
                <span><Button onClick={() => {saveForm(id)}}>Save</Button></span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{description}</p>
            </div>
          </div>
          ) : (
            <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}{" "}
                <span className="post__headerSpecial">
                  @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{description}</p>
            </div>
          </div>
          )}
          <img src='food' alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            <Button onClick={toggleEdit}><EditIcon fontSize="small"/></Button>
          </div>
        </div>
      </div>
    );
  }
);

export default UserPost;