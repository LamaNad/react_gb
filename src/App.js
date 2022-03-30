import { useEffect, useRef, useState } from 'react';
import './style.scss';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';


function App() {
  const timeout = useRef();
  const [messages, setMessages] = useState([]);

  const botName = 'BOT';
  const userName = 'You';
  const userRole = 'sender';

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (messages.length === 0) {
      return;
    }

    if (lastMessage.author !== botName) {
      timeout.current = setTimeout(() => {
        setMessages([...messages, {
          text: "Hello! I`m Bot. Your message was: "+ lastMessage.text,
          author: botName,
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
      author: userName, 
      role: userRole,
      id: `msg-${Date.now()}`,
    }]);
  };

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form onSubmit={addMessage} />
    </div>
  );
}

export default App;
