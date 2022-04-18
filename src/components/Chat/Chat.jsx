import { useMemo, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USERS } from '../../utils/constants';
import './Chat.scss';

import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';

import { addMessageWithReply } from '../../store/messages/actions';
import { selectMessagesByChatId } from "../../store/messages/selectors";

export function Chat() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const wrapperRef = useRef();
  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]); // Будет перевыполняться только тогда, когда изменится массив зависимостей

  const messages = useSelector(getMessages);

  const sendMessage = (text) => {
    if(text !== ""){
      dispatch(
        addMessageWithReply({
            text, 
            author: USERS.userName, 
            role: USERS.userRole,
            id: `msg-${Date.now()}`,
          },
          id
        )
      );
    }
  };

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
