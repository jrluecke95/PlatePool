import { Avatar, Button, FormLabel, Input, InputLabel, MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

const EditProfile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    street: '',
    city: '',
    state: '',
    zipcode: ''
  })
  const [profilePic, setProfilePic] = useState()
  const dispatch = useDispatch();

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

  useEffect(() => {
    fetch('/api/v1/users/current')
    .then(res => res.json())
    .then(data => {
      setForm(data)
      setProfilePic(data.profilePic)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', form.name)
    data.append('email', form.email)
    data.append('password', form.password)
    data.append('street', form.street)
    data.append('city', form.city)
    data.append('state', form.state)
    data.append('zipcode', form.zipcode)
    data.append('profilePic', form.profilePic)
    fetch('/api/v1/users/editprofile', {
        method: 'PUT',
        body: data,
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                alert('your profile has been updated')
                dispatch(setUser(data))
            }
        });
};

const handleChange = (e) => {
  setForm({
      ...form,
      [e.target.name]: e.target.value
  })
}

function handleFileChange(e) {
  var file = e.target.files[0];
  setForm({
      ...form,
      [e.target.name]: file
  })
}

  const [ values ] = useState({
    showPassword: false
})

  return (
    <div>
            <h1>Profile Info</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={handleChange} name="name" value={form.name} style={{ width: '75%', marginTop: '2%' }} fullWidth   label="name" />
                <TextField onChange={handleChange} name="email" value={form.email} style={{ width: '75%', marginTop: '2%' }} fullWidth  label="email" />
                <TextField onChange={handleChange} name="password" value={form.password} style={{ width: '75%', marginTop: '2%'}} type={values.showPassword ? "text" : "password"} fullWidth label="password" />
                <TextField onChange={handleChange} name="street" value={form.street} style={{ width: '75%', marginTop: '2%' }} fullWidth label="Street Address" />
                <TextField onChange={handleChange} name="city" value={form.city} style={{ width: '75%', marginTop: '2%' }} fullWidthlabel="City" />
                <TextField onChange={handleChange} name="state" value={form.state} style={{ width: '75%', marginTop: '3%' }} select  label="State">
                {
                    states.map((state) => (
                        <MenuItem key={state.name} value={state.name} >
                            {state.abbreviation}
                        </MenuItem>
                    ))
                }
                </TextField>
                <TextField name="zipcode" onChange={handleChange} value={form.zipcode} style={{ width: '75%', marginTop: '2%' }} fullWidth  label="Zipcode" />
                <br />
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
                    <div>
                    <Avatar src={profilePic} style={{height: '15vh', width: '15vh'}}/>
                    </div>
                    <div>
                    <InputLabel>Profile Picture</InputLabel>
                <Input label='profile picture' type="file" name="profilePic"  onChange={handleFileChange}></Input>
                    </div>
                
                </div>
                
                <br />
                <Button type="submit" style={{ marginTop: '2%' }} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
  )
}

export default EditProfile

