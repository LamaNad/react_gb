import { useEffect, useMemo, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USERS } from '../../utils/constants';
import './Chat.scss';

import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';

import { addMessage } from '../../store/messages/actions';
import { selectMessagesByChatId } from "../../store/messages/selectors";

export function Chat() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const timeout = useRef();
  const wrapperRef = useRef();
  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]); // Будет перевыполняться только тогда, когда изменится массив зависимостей

  const messages = useSelector(getMessages);

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
    const lastMessage = messages?.[messages?.length - 1];

    if (messages?.length !== 0 && lastMessage?.author !== USERS.botName) {
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

  if (!messages) {
    return <Navigate to="/chat" replace />
  }

  return (
    <div className="App messenger_bl" ref={wrapperRef}>
        <div className='messenger_chat'>
          <div className='messenger_dialog'>
            <div className='messeges'>
              <MessageList messages={messages} />
            </div>
          </div>
          <div className='messenger_form'>
            <Form onSubmit={sendMessage} />
          </div>
        </div> 
    </div>
  );
}
