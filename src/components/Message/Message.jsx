import './Message.scss';

export const Message = ({ author, text, role}) => {
    return (
        <div className={role}>
            <div class="content">{text}</div>
            <div class="author"><span class="name">{author}</span></div>
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