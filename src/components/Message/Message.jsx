import './Message.scss';

import { PropTypes } from 'prop-types';
export const Message = ({ author, text, role }) => {
    return (
        <div className={role}>
            <div className="content">{text}</div>
            <div className="author"><span className="name">{author}</span></div>
        </div >
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}