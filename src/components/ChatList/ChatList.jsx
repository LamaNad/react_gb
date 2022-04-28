import { NavLink } from 'react-router-dom';
import { Avatar, Grid, Button, Paper, Typography, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../services/firebase';

export const ChatList = () => {
  const [ chats, setChats ] = useState([]);

  const handleRemoveChat = (id) => {
    // dispatch(deleteChat(id));
    // set(getChatRefById(id), null);
    remove(getChatRefById(id)); //тоже самое что set(... , null)    
    set(getMsgsRefById(id), null);

  };

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      setChats(Object.values(snapshot.val() || {} ));
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      { 
        chats.length ?
          chats.map((chat) => (
            <Stack direction="row" spacing={2} key={chat.id}>
              <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to={`/chat/${chat.id}`}>
                <Paper className="paper">
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar className='sender_avatar'>{chat.author.charAt(0)}</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth className='chat_message'>
                      <Typography noWrap>{chat.author}</Typography>
                      <div className='chats_author'>{chat.data}</div>
                    </Grid>
                  </Grid>
                </Paper>
              </NavLink>
              <Button variant="outlined" color="error" className='del_btn' onClick={() => handleRemoveChat(chat.id)}>
                Delete
              </Button>
            </Stack>
          ))
        : <p> You have not chats yet :( </p>
      }
    </div>
  );
}
