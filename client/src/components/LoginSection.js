import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/actions";

const LoginSection = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    alert('User logged in Successfully')
                    dispatch(setUser(data))
                    history.push('/')
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
            <h1>Login Form</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={handleChange} name="email" value={form.email} style={{ width: '75%'}} fullWidth  id="standard-multiline-flexible" label="email" />
                <TextField onChange={handleChange} type={values.showPassword ? "text" : "password"} name="password" value={form.password} style={{ width: '75%', marginTop: '2%' }} fullWidth id="standard-basic"  label="password" />
                <br />
                <Button type="submit" style={{ marginTop: '2%' }} variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}

export default LoginSection;
