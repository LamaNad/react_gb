import { Message } from "../Message/Message"

export const MessageList = ({ messages }) => 
    messages.map((messageArray) => 
        <Message key={messageArray.id} author={messageArray.author} text={messageArray.text} role={messageArray.role}/>);