import { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USERS } from '../../utils/constants';
import './Chat.scss';

import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';

import { addMessage } from '../../store/messages/actions';
import { selectMessages } from "../../store/messages/selectors";

export function Chat() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const timeout = useRef();
  const wrapperRef = useRef();

  const messages = useSelector(selectMessages);

  const sendMessage = (text) => {
    if(text !== ""){
      addNewMessage({
          text, 
          author: USERS.userName, 
          role: USERS.userRole,
          id: `msg-${Date.now()}`,
        },
        id
      );
    }
  };

  const addNewMessage = (newMsg, id) => {
    dispatch(addMessage(newMsg, id));
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];

    if (messages[id]?.length !== 0 && lastMessage?.author !== USERS.botName) {
      timeout.current = setTimeout(() => {
        addNewMessage({
            text: "Hello! I`m Bot. Your message was: "+ lastMessage.text,
            author: USERS.botName,
            role: 'recepient',
            id: `msg-${Date.now()}`,
          },
          id
        );
      }, 1000);
  }
    
  return () => clearTimeout(timeout.current);

  }, [messages]);

  if (!messages[id]) {
    return <Navigate to="/chat" replace />
  }

  return (
    <div className="App messenger_bl" ref={wrapperRef}>
        <div className='messenger_chat'>
          <div className='messenger_dialog'>
            <div className='messeges'>
              <MessageList messages={messages[id]} />
            </div>
          </div>
          <div className='messenger_form'>
            <Form onSubmit={sendMessage} />
          </div>
        </div> 
    </div>
  );
}
