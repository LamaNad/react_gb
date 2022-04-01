import './ChatList.scss';

import { Chat } from '../Chat/Chat';

export const ChatList = ({ chats }) => 
  chats.map((chat) => 
  <Chat key={chat.id} author={chat.author} text={chat.lastMessage} data={chat.data}/>);