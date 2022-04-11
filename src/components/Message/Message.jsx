import './Message.scss';

import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';

export const Message = ({ author, text, role }) => {
    const {theme} = useContext(ThemeContext);
    
    return (
        <div className={role}>
            <div style={{ backgroundColor: theme === "dark" ? "#564697" : "#fff", color: theme === "dark" ? "#fff" : "#333" }} className="content">{text}</div>
            <div className="author"><span className="name">{author}</span></div>
        </div >
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}