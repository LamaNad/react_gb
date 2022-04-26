import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { MainLayout } from '../../components/Layout/MainLayout';
import { ChatList } from '../../components/ChatList/ChatList';
import { Form } from '../../components/Form/Form';

import { getChatRefById, getMsgsRefById } from '../../services/firebase';
import { set } from 'firebase/database';


export const Chat = () => {
  const { id } = useParams();

  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  let dateToday = new Date().toLocaleString('en-EN', options);

  const addNewChat = (newChatName) => {
    const newChat = {
      author: newChatName,
      data: dateToday,
      id: `chat-${Date.now()}`,
    };

    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), {exists: true });
  };

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="left-side">
          <div className="side-wrapper">
            <div className="side-title">Messages</div>
            <div className="side-menu">
              <div className="chat-list">
                <ChatList />
                <Form onSubmit={addNewChat} />
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="content-wrapper">
            <div className="content_chat-list">
              {!id && <>
                <label>New chat:</label>
                <Form onSubmit={addNewChat}/> 
                <ChatList />
              </> }
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}