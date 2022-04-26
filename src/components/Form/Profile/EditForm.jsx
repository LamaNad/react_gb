import { TextField } from "@mui/material";
import { useRef, useState } from "react";

export const EditForm = ({ onSubmit, label, type }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue('');
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type={type}
                label={label}
                variant="outlined" 
                value={value} onChange={handleChange} inputRef={inputRef} />
        </form>
    )
};