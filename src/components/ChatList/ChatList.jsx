import './ChatList.scss';

import { Chat } from '../Chat/Chat';
import { useState } from 'react';

const message = `It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged.`;

const chatListArr = [
  {
    id: `chat-1`,
    author: 'Ann',
    lastMessage: message,
    data: '31 mart 2022',
  },
  {
    id: `chat-2`,
    author: 'Tomm',
    lastMessage: message,
    data: '30 mart 2022',
  },
  {
    id: `chat-3`,
    author: 'Jess',
    lastMessage: message,
    data: '28 mart 2022',
  },
];

export const ChatList = () => {  
  const [chats] = useState(chatListArr);
  
  return(
    chats.map((chat) => 
  <Chat key={chat.id} author={chat.author} text={chat.lastMessage} data={chat.data}/>)
  );
}