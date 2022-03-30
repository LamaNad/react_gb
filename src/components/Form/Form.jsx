import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import './Form.scss';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue('');
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        console.log('did mount');
        
        return () => {
            console.log('will unmount');
        };
    },[]);

    return (
        <form onSubmit={handleSubmit}>
            {/* <textarea value={value} onChange={handleChange} cols="60" rows="1"></textarea> */}
            {/* <input type="submit" value="Send"/> */}
            <TextField value={value} onChange={handleChange} />
            <Button
            sx={{
                width: 150,
                background: '#8dd23c'
              }}
               className="mybtn" type="submit" variant="contained" >Send</Button>
        </form>
    )
}