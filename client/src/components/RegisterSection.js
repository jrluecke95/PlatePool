import React, { useState } from 'react'
import { TextField, Button, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'



const RegisterSection = () => {

    const states = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    })
    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                password: form.password,
                street: form.street,
                city: form.city,
                state: form.state,
                zipcode: form.zipcode
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    alert('User registered Successfully')
                    history.push('/login')
                }
            });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [ values ] = useState({
        showPassword: false
    })


    return (
        <div>
            <h1>Register Form</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={handleChange} name="name" value={form.name} style={{ width: '75%', marginTop: '2%' }} fullWidth  id="standard-multiline-flexible" label="name" />
                <TextField onChange={handleChange} name="email" value={form.email} style={{ width: '75%', marginTop: '2%' }} fullWidth id="standard-basic"  label="email" />
                <TextField onChange={handleChange} name="password" value={form.password} style={{ width: '75%', marginTop: '2%'}} type={values.showPassword ? "text" : "password"} fullWidth id="standard-basic" label="password" />
                <TextField onChange={handleChange} name="street" value={form.street} style={{ width: '75%', marginTop: '2%' }} fullWidth id="standard-basic" label="Street Address" />
                <TextField onChange={handleChange} name="city" value={form.city} style={{ width: '75%', marginTop: '2%' }} fullWidth id="standard-basic" label="City" />
                <TextField onChange={handleChange} name="state" value={form.state} style={{ width: '75%', marginTop: '3%' }} select id="standard-select-state" label="State">
                {
                    states.map((state) => (
                        <MenuItem key={state.name} value={state.name} >
                            {state.abbreviation}
                        </MenuItem>
                    ))
                }
                </TextField>
                <TextField name="zipcode" onChange={handleChange} value={form.zipcode} style={{ width: '75%', marginTop: '2%' }} fullWidth id="standard-basic"  label="Zipcode" />
                <br />
                <Button type="submit" style={{ marginTop: '2%' }} variant="contained" color="primary">Register</Button>
            </form>
        </div>
    )
}

export default RegisterSection;
