import React from 'react'
import { Button, TextField } from '@material-ui/core'

const LoginSection = () => {
    return (
        <div>
            <h1>Login Form</h1>
            <form noValidate autoComplete="off">
                <TextField style={{ width: '75%'}} fullWidth  id="standard-multiline-flexible" label="email" />
                <TextField style={{ width: '75%', marginTop: '2%' }} fullWidth id="standard-basic"  label="password" />
                <br />
                <Button style={{ marginTop: '2%' }} variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}

export default LoginSection;
