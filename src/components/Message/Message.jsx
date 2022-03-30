import './Message.scss';

export const Message = ({ author, text, role}) => {
    return (
        <div className={role}>
            <div className="content">{text}</div>
            <div className="author"><span className="name">{author}</span></div>
        </div >
    );
}

// import React from "react";

// export class Message extends React.Component{
//     render() {
//         const {name, lastname, foo} = this.props;
//         return (
//             <div id="app">
//                 <h3 className="message">
//                     Hello, {name} {lastname}
//                 </h3>
//                 <button type="button" onClick={foo}>Click me</button>
//             </div>
//         );
//     }
// }