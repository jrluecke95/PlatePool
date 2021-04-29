import { Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreatePlateSection = () => {
    // name, price, 
    // description, 
    // cuisine, quantity, alergenInfo

    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        cuisine: '',
        allergies: '',
        quantity: '',
        isForSale: null
    })
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', form.name)
        data.append('price', form.price)
        data.append('description', form.description)
        data.append('cuisine', form.cuisine)
        data.append('allergies', form.allergies)
        data.append('quantity', form.quantity)
        data.append('isForSale', form.isForSale)
        data.append('foodPic', form.foodPic)
        fetch('/api/v1/plates/create', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    alert('User Created Meal Successfully')
                    history.push('/')
                }
            })
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


    return (
        <div>
            <h1>Create A Plate</h1>
            <form onSubmit={handleSubmit}>
                <FormControl style={{ marginRight: '5%', width: '40%' }}>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={handleChange} name="name" value={form.name} />
                    <TextField onChange={handleChange} name="description" value={form.description} multiline row={4} style={{ marginTop: '10%' }} placeholder="Description" />
                    <TextField onChange={handleChange} name="allergenInfo" value={form.allergenInfo} style={{ marginTop: '10%' }} placeholder="Allergies" />
                </FormControl>
                <FormControl>
                    <InputLabel>$ Price</InputLabel>
                    <Input onChange={handleChange} type="number" name="price" value={form.price} />
                    <TextField onChange={handleChange} value={form.cuisine} name="cuisine" style={{ marginTop: '20%' }} select id="standard-select-state" label="Cuisine">
                        {
                            cuisines.map((cuisine) => (
                                <MenuItem key={cuisine.name} value={cuisine.name}>
                                    {cuisine.name}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField onChange={handleChange} name="quantity" type="number" value={form.quantity} style={{ marginTop: '18%' }}  label="quantity" />
                </FormControl>
                <br />
                <FormControl style={{marginTop: '5%'}} component="fieldset">
                    <FormLabel component="legend">Is this item for sale</FormLabel>
                    <RadioGroup aria-label="forSale" name="isForSale" value={form.isForSale} onChange={handleChange}>
                        <FormControlLabel value="true" control={<Radio />} label="yes" />
                        <FormControlLabel value="false" control={<Radio />} label="no" />
                    </RadioGroup>
                </FormControl>
                <br />
                <input type="file" name="foodPic"  onChange={handleFileChange}></input>
                <Button type="submit" style={{ marginTop: '2%' }} variant="contained" color="primary">Create Meal!</Button>
            </form>
        </div>
    )
}

export default CreatePlateSection;
