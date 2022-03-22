import './../../style.scss';

export const Message = ({name, lastname, foo, clrDark}) => {
    return (
        <div id="app">
            <h3 className={"message" + (clrDark ? " text-dark" : "")}>
                Hello, {name} {lastname}
            </h3>
            <button type="button" onClick={foo}>Click me</button>
        </div>
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