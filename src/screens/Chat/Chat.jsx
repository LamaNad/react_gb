import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { Outlet, useParams } from 'react-router-dom';
import { ChatList } from '../../components/ChatList/ChatList';


export const Chat = ({ chats }) => {
  const { id } = useParams();

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