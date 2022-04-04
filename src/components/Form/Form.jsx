import './Form.scss';

import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue('');
        inputRef.current?.focus(); // автофокус на текстовое поле  после отправки сообщения
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        console.log('did mount');
        inputRef.current?.focus(); // автофокус на текстовое поле при открытии страницы

        return () => {
            console.log('will unmount');
        };
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                sx={{
                    width: '100%',
                    background: '#fff',
                    borderRadius: 1,
                    marginRight: '10px',
                }}
                value={value} onChange={handleChange} inputRef={inputRef} />

            <Button
                sx={{
                    width: 150,
                    background: '#8dd23c'
                }}
                className="mybtn" type="submit" variant="contained" >Send</Button>
        </form>
    )
}