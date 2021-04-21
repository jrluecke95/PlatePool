import React from 'react'
import { TextField, Button } from '@material-ui/core'


const RegisterSection = () => {
    return (
        <div>
            <h1>Register Form</h1>
            <form noValidate autoComplete="off">
                <TextField style={{ width: '75%' }} fullWidth multiline id="standard-multiline-flexible" label="Standard" />
                <TextField style={{ width: '75%' }} fullWidth id="standard-basic" multiline label="Standard" />
                <br />
                <Button style={{ marginTop: '2%' }} variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}

export default RegisterSection;
