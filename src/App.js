import { useEffect, useState } from 'react';
import './style.scss';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';

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
          role: 'recepient'
        }]);
      }, 1000);
  }
  }, [messages]);

  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: userName, role: userRole}]);
  };

  return (
    <div className="App">
      {messages.map((messageArray) => 
        <Message author={messageArray.author} text={messageArray.text} role={messageArray.role}/>
      )}
      <Form onSubmit={addMessage} />
    </div>
  );
}

export default App;
