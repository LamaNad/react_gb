import { NavLink } from 'react-router-dom';
import { Avatar, Grid, Paper, Typography } from '@mui/material';

export const ChatList = ({ chats }) => {

  return (
    <div>
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
  );
}
