import { useEffect, useState } from 'react';
import './style.scss';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';

const messageArray = []; 

function App() {
  const [messages, setMessages] = useState(messageArray);

  const botName = 'BOT';
  const userName = 'You';
  const userRole = 'sender';

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (messages.length === 0) {
      return;
    }

    if (lastMessage.author !== botName) {
      setTimeout(() => {
        setMessages([...messages, {
          text: "Hello! I`m Bot. Your message was: "+ lastMessage.text,
          author: botName,
          role: 'recepient',
          id: `msg-${Date.now()}`,
        }]);
      }, 1000);
  }
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
