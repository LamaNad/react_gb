import { useEffect, useRef, useState } from 'react';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { USERS } from '../../utils/constants';
import { Navigate, useParams } from 'react-router-dom';
import './Chat.scss';


const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
};

export function Chat() {
  const { id } = useParams();
  const timeout = useRef();
  const wrapperRef = useRef();
  
  const [messages, setMessages] = useState(initMessages);

  const addMessage = (newMsg) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const sendMessage = (text) => {
    if(text !== ""){
      addMessage({
        text, 
        author: USERS.userName, 
        role: USERS.userRole,
        id: `msg-${Date.now()}`,
      });
    }
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];

    if (messages[id]?.length !== 0 && lastMessage?.author !== USERS.botName) {
      timeout.current = setTimeout(() => {
        addMessage({
          text: "Hello! I`m Bot. Your message was: "+ lastMessage.text,
          author: USERS.botName,
          role: 'recepient',
          id: `msg-${Date.now()}`,
        });
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
