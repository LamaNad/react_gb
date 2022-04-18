import { NavLink } from 'react-router-dom';
import { Avatar, Grid, Button, Paper, Typography, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { deleteChat } from '../../store/chats/actions';
import { clearMessagesForChat } from '../../store/messages/actions';

export const ChatList = () => {
  const dispatch = useDispatch();

  const chats = useSelector(selectChats);

  const handleRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessagesForChat(id));
  };

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
