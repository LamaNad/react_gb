import { useEffect, useRef, useState } from 'react';
import './style.scss';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { ChatList } from './components/ChatList/ChatList';
import { USERS } from './Utils/constants';

const message = `Truncation should be conditionally applicable on this long line of text
as this is a much longer line than what the container can support. `;

const chatListArr = [
  {
    id: `chat-1`,
    author: 'Ann',
    lastMessage: message,
    data: '31 mart 2022',
  },
  {
    id: `chat-2`,
    author: 'Tomm',
    lastMessage: message,
    data: '30 mart 2022',
  },
  {
    id: `chat-3`,
    author: 'Jess',
    lastMessage: message,
    data: '28 mart 2022',
  },
];

function App() {
  const timeout = useRef();
  const [messages, setMessages] = useState([]);
  const [chats] = useState(chatListArr);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (messages.length === 0) {
      return;
    }

    if (lastMessage.author !== USERS.botName) {
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
    setMessages([...messages, { 
      text, 
      author: USERS.userName, 
      role: USERS.userRole,
      id: `msg-${Date.now()}`,
    }]);
  };

  return (
    <div className="App messenger_bl">
      <div className='messenger_chatlist'>
        <div className='root'>
          <ChatList chats={chats} />
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
  );
}

export default App;
