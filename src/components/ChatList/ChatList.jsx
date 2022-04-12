import { NavLink } from 'react-router-dom';
import { Avatar, Grid, Button, Paper, Typography, Stack } from '@mui/material';

export const ChatList = ({ chats, deleteChat }) => {
  return (
    <div>
      {chats.map((chat) => (
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
          <Button variant="outlined" color="error" className='del_btn' onClick={() => deleteChat(chat.id)}>
            Delete
          </Button>
        </Stack>
      ))}
    </div>
  );
}
