import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { Outlet, useParams } from 'react-router-dom';
import { ChatList } from '../../components/ChatList/ChatList';
import { Form } from '../../components/Form/Form';


export const Chat = ({ chats, addChat, deleteChat }) => {
  const { id } = useParams();
  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  let dateToday = new Date().toLocaleString('en-EN', options);

  const handleSubmit = (newChatName) => {
    const newChat = {
      author: newChatName,
      data: dateToday,
      id: `chat-${Date.now()}`,
    };

    addChat(newChat);
  };

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="left-side">
          <div className="side-wrapper">
            <div className="side-title">Messages</div>
            <div className="side-menu">
              <div className="chat-list">
                <ChatList chats={chats} deleteChat={deleteChat} />
                <Form onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="content-wrapper">
            <div className="content_chat-list">
              {!id && <>
                <label>New chat:</label>
                <Form onSubmit={handleSubmit}/> 
                <ChatList chats={chats} deleteChat={deleteChat}/>
              </> }
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}