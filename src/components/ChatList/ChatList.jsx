import { Chat } from '../Chat/Chat';
import './ChatList.scss';

export const ChatList = ({ chats }) => 
  chats.map((chat) => 
  <Chat key={chat.id} author={chat.author} text={chat.lastMessage} data={chat.data}/>);


//   return (
//     <div className="root">
//       chatListArr.reverse().map((chatListArr) => (
//         <Paper className="paper">
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>W</Avatar>
//           </Grid>
//           <Grid item xs zeroMinWidth>
//             <Typography noWrap>{chatListArr.lastMessage}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//       );

//       <Paper className="paper">
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>W</Avatar>
//           </Grid>
//           <Grid item xs zeroMinWidth>
//             <Typography noWrap>{message}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//       <Paper className="paper">
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item>
//             <Avatar>W</Avatar>
//           </Grid>
//           <Grid item xs zeroMinWidth>
//             <Typography noWrap>{message}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }
//