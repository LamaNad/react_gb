import { useState } from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Avatar, Grid, Paper, Typography } from '@mui/material';

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
                {chats.map((chat) => (
                  <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to={`/chat/${chat.id}`} key={chat.id}>
                    <Paper className="paper">
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                          <Avatar className='sender_avatar'>{chat.author.charAt(0)}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth className='chat_message'>
                          <div className='chats_author'>{chat.author}</div>
                          <Typography noWrap>{chat.data}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="content-wrapper">

            { !id && 
              <div className="content_chat-list">
                {chats.map((chat) => (
                  <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to={`/chat/${chat.id}`} key={chat.id}>
                    <Paper className="paper">
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                          <Avatar className='sender_avatar'>{chat.author.charAt(0)}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth className='chat_message'>
                          <div className='chats_author'>{chat.author}</div>
                          <Typography noWrap>{chat.data}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </NavLink>
                ))}
              </div> }

            <Outlet />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}