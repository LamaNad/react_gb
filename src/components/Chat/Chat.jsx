import { Avatar, Grid, Paper, Typography } from '@mui/material';

export const Chat = ({ author, text, data}) => {
    return (
        <Paper className="paper">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{ author.charAt(0) }</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <div className='chats_author'>{ author }</div>
            <Typography noWrap>{ text }</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
}