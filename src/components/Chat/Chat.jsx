import { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { USERS } from '../../utils/constants';
import './Chat.scss';

import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';

import { onValue, push } from 'firebase/database';
import { getMsgsListRefById, getMsgsRefById, userNameRef } from '../../services/firebase';

export function Chat() {
  const { id } = useParams();
  const wrapperRef = useRef();
  const [name, setName] = useState('');

  const [ messages, setMessages ] = useState([]);
  // const getMessages = useMemo(() => selectMessagesByChatId(id), [id]); // Будет перевыполняться только тогда, когда изменится массив зависимостей

  const sendMessage = (text) => {
    push(getMsgsListRefById(id), {
      text, 
      author: name, 
      role: USERS.userRole,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => {
      setName(snapshot.val());
    });

    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return  () => {
      unsubscribe();
      unsubscribeName();
    };

  }, [id]);

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
