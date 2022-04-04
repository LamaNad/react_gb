import { Avatar, Grid, Paper, Typography } from '@mui/material';
import './Chat.scss';

export const Chat = ({ author, text}) => {
    return (
        <Paper className="paper">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className='sender_avatar'>{ author.charAt(0) }</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <div className='chats_author'>{ author }</div>
            <Typography noWrap>{ text }</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
}