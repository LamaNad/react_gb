import { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { USERS } from '../../utils/constants';
import './Chat.scss';

import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';

import { onValue, push } from 'firebase/database';
import { getChatRefById, getMsgsListRefById, getMsgsRefById, userNameRefById } from '../../services/firebase';
import { getAuth } from 'firebase/auth';

export function Chat() {
  const auth = getAuth();
  const user = auth.currentUser;
  const { id } = useParams();
  const wrapperRef = useRef();
  const [ name, setName ] = useState('');
  const [ recepientName, setRecepientName] = useState('');
  const timeout = useRef();

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
    const unsubscribeRecepientName = onValue(getChatRefById(id), (snapshot) => {
      setRecepientName(snapshot.val().author);
    });

    const unsubscribeName = onValue(userNameRefById(user.uid), (snapshot) => {
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
      unsubscribeRecepientName();
    };

  }, [ id ]);

  useEffect(() => {
    const lastMessage = messages?.[messages?.length - 1];
      if (messages?.length !== 0 && lastMessage?.author !== recepientName) {
        timeout.current = setTimeout(() => {
          push(getMsgsListRefById(id), {
            text: "Hello! I`m Bot. Your message was: " + lastMessage.text,
            author: recepientName,
            role: 'recepient',
            id: `msg-${Date.now()}`,
          });
        }, 1000);
      }

      return  () => clearTimeout(timeout.current);
  }, [ id, messages, recepientName ]);

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
