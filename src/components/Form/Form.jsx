import { useState } from "react";
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

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={value} onChange={handleChange} cols="60" rows="1"></textarea>
            <input type="submit" value="Send"/>
        </form>
    )
}