import React, { forwardRef, useState } from "react";
import "../components/MiddleContainer/Post.css";
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from "@material-ui/core";
import './UserPost.css';
import EditIcon from '@material-ui/icons/Edit';

const UserPost = forwardRef(
  ({ id, name, price, username, description, cuisine, quantity, allergenInfo, isForSale, profilePic, foodPic, onSave }, ref) => {
    const [ editing, setEditing ] = useState(false);
    const [form, setForm ] = useState({
      name,
      price,
      description,
      cuisine,
      quantity,
      allergenInfo,
      isForSale: isForSale ? 'true' : 'false'
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
      const data = new FormData()
      data.append('name', form.name)
      data.append('price', form.price)
      data.append('description', form.description)
      data.append('cuisine', form.cuisine)
      data.append('allergies', form.allergies)
      data.append('quantity', form.quantity)
      data.append('isForSale', form.isForSale)
      data.append('foodPic', form.foodPic)
      fetch(`/api/v1/plates/${id}`, {
        method: 'PUT',
        body: data,
      })
      .then((res) => res.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          alert('plate updated!');
          onSave();
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

    function handleFileChange(e) {
      const file = e.target.files[0];
      setForm({
          ...form,
          [e.target.name]: file
      })
  }

    return (
      <form className="post" key={ref}>
        <div className="post__avatar">
          <Avatar src={profilePic} />
          {username}
        </div>
        <div className="post__body" style={{color: 'white', backgroundColor: '#092F37'}}>
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
                    <RadioGroup value={form.isForSale} aria-label="forSale" name="isForSale" onChange={handleChange}>
                      <FormControlLabel  value="true" control={<Radio name="isForSale"/>} label="yes" />
                      <FormControlLabel  value="false" control={<Radio name="isForSale"/>} label="no"/>
                    </RadioGroup>
                </FormControl>
                <Avatar src={foodPic}/>
                <input type="file" name="foodPic" onChange={handleFileChange}></input>
                
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
              <Avatar src={foodPic}/>
            </div>
          </div>
          )}
          <img src='food' alt="" />
          <div className="post__footer">
            {editing ? (
              <Button color='white' onClick={() => {saveForm(id)}}>Save</Button>
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