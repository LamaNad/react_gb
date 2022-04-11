import { useState } from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { Outlet, useParams } from 'react-router-dom';
import { ChatList } from '../../components/ChatList/ChatList';

const message = `It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged.`;

const chatListArr = [
  {
    id: `chat1`,
    author: 'Ann',
    lastMessage: message,
    data: '31 mart 2022',
  },
  {
    id: `chat2`,
    author: 'Tomm',
    lastMessage: message,
    data: '30 mart 2022',
  },
  {
    id: `chat3`,
    author: 'Jess',
    lastMessage: message,
    data: '28 mart 2022',
  },
];

export const Chat = () => {
  const { id } = useParams();
  const [chats] = useState(chatListArr);

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="left-side">
          <div className="side-wrapper">
            <div className="side-title">Messages</div>
            <div className="side-menu">
              <div className="chat-list">
                <ChatList chats={chats} />
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="content-wrapper">
            <div className="content_chat-list">
              { !id && <ChatList chats={chats} /> }
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}