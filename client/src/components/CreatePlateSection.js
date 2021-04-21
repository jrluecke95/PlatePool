import { FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import React from 'react'

const CreatePlateSection = () => {
    // name, price, 
    // description, 
    // cuisine, quantity, alergenInfo
    return (
        <div>
            <h1>Create A Plate</h1>
            <form>
                <FormControl style={{marginRight: '5%', width: '40%'}}>
                    <InputLabel>Name</InputLabel>
                    <Input />
                    <TextField multiline row={4} style={{marginTop: '5%'}} />
                </FormControl>
                <FormControl>
                    <InputLabel>$ Price</InputLabel>
                    <Input />
                </FormControl>
            </form>
        </div>
    )
}

export default CreatePlateSection;
