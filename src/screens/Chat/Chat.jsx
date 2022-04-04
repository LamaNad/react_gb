import { useEffect, useRef, useState } from 'react';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { ChatList } from '../../components/ChatList/ChatList';
import { USERS } from '../../utils/constants';
import { MainLayout } from '../../components/Layout/MainLayout';

export function Chat() {
  const timeout = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (lastMessage?.author !== USERS.botName) {
      timeout.current = setTimeout(() => {
        setMessages([...messages, {
          text: "Hello! I`m Bot. Your message was: "+ lastMessage.text,
          author: USERS.botName,
          role: 'recepient',
          id: `msg-${Date.now()}`,
        }]);
      }, 1000);
  }
    
  return () => clearTimeout(timeout.current);

  }, [messages]);

  const addMessage = (text) => {
    if(text !== ""){
      setMessages([...messages, { 
        text, 
        author: USERS.userName, 
        role: USERS.userRole,
        id: `msg-${Date.now()}`,
      }]);
    }
  };

  return (
    <MainLayout>
    <div className="App messenger_bl">
      <div className='messenger_chatlist'>
        <div className='root'>
          <h3>💬 Chat</h3>
          <ChatList />
        </div>
      </div>
      <div className='messenger_chat'>
        <div className='messenger_dialog'>
          <div className='messeges'>
            <MessageList messages={messages} />
          </div>
        </div>
        <div className='messenger_form'>
          <Form onSubmit={addMessage} />
        </div>
      </div>
    </div>
    </MainLayout>
  );
}
