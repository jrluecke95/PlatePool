import React, { forwardRef, useState } from "react";
import "../components/MiddleContainer/Post.css";
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, TextField } from "@material-ui/core";
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

    const cuisines = [
      {
          name: 'Asian'
      }, {
          name: 'American'
      }, {
          name: 'Italian'
      }, {
          name: 'Mexican'
      }, {
          name: 'Breakfast'
      }, {
          name: 'French'
      }, {
          name: 'African'
      }, {
          name: 'BBQ'
      }, {
          name: 'Brazillian'
      }, {
          name: 'Jamaican'
      }
  ]

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
        console.log(data)
        if (data.error) {
          alert(data.error)
        } else {
          alert('plate updated!');
        }
      })
      toggleEdit()
    }

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    return (
      <form className="post" key={ref}>
        <div className="post__avatar">
          <Avatar src='profpic' />
          {username}
        </div>
        <div className="post__body">
          {editing ? (
            <div className="post__header">
            <div className="post__headerText">
              <h3>
              <TextField onChange={handleChange} defaultValue={form.price} name='price' defulatValue={form.price}type='text' label='$ Price' style={{ marginRight: '5px' }}></TextField>
              <TextField onChange={handleChange} defaultValue={`${form.name}`} name='name' type='text' label='Name' style={{ marginRight: '5px' }}></TextField >
                {" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <TextField onChange={handleChange} defaultValue={form.description} name='description' type="text" label="Description" style={{ marginRight: '5px' }}></TextField>
              <TextField onChange={handleChange} value={form.cuisine} name="cuisine" style={{ marginRight: '5px' }} select id="standard-select-state" label="Cuisine">
                {
                  cuisines.map((cuisine) => (
                    <MenuItem key={cuisine.name} value={cuisine.name} default>
                        {cuisine.name}
                    </MenuItem>
                  ))
                }
              </TextField>
              <TextField type="text" name="allergenInfo" defaultValue={form.allergenInfo} onChange={handleChange} label="Allergen Info" style={{ marginRight: '5px' }}></TextField>
              <TextField onChange={handleChange} defaultValue={form.quantity} name='quantity' label="Quantity" style={{ marginRight: '5px' }}></TextField>
              <FormControl style={{marginTop: '2%'}} component="fieldset">
                    <FormLabel component="legend">Do you want this item listed?</FormLabel>
                    <RadioGroup aria-label="forSale" name="isForSale" value={form.isForSale} onChange={handleChange}>
                        {form.isForSale ? (
                          <>
                          <FormControlLabel value="true" control={<Radio />} label="yes" checked/>
                          <FormControlLabel value="false" control={<Radio />} label="no" />
                          </>
                        ) : (
                          <>
                          <FormControlLabel value="true" control={<Radio />} label="yes" />
                          <FormControlLabel value="false" control={<Radio />} label="no" checked/>
                          </>
                        )}
                    </RadioGroup>
                </FormControl>
                
            </div>
          </div>
          ) : (
            <div className="post__header">
            <div className="post__headerText">
              <h3>
                ${form.price}{" "}
                {form.name}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{form.description} </p>
              <p>{form.cuisine} {form.allergenInfo}</p>
              <p>{`You have ${form.quantity} listed`}</p>
            </div>
          </div>
          )}
          <img src='food' alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            {editing ? (
              <Button color='primary' onClick={() => {saveForm(id)}}>Save</Button>
            ) : (
              <Button onClick={toggleEdit}><EditIcon fontSize="small"/></Button>
            )}
            
            
          </div>
        </div>
      </form>
    );
  }
);

export default UserPost;