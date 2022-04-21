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
        inputRef.current?.focus(); // автофокус на текстовое поле при открытии страницы
    }, []);

    return (
        <form onSubmit={handleSubmit} className="submit_form">
            <TextField className="messageInput" value={value} onChange={handleChange} inputRef={inputRef} />
            <Button className="mybtn" type="submit" variant="contained" >Send</Button>
        </form>
    )
}