import { USERS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const INIT_MESSAGES_FOR_CHAT = "MESSAGES::INIT_MESSAGES_FOR_CHAT";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMsg,
        chatId,
    },
});

export const initMessagesForChat = (chatId) => ({
    type: INIT_MESSAGES_FOR_CHAT,
    payload: chatId,
});

export const clearMessagesForChat = (chatId) => ({
    type: CLEAR_MESSAGES_FOR_CHAT,
    payload: chatId,
});

let timeout;
export const addMessageWithReply = (newMsg, chatId) => (dispatch) => {
    dispatch(addMessage(newMsg, chatId));

    if (newMsg?.length !== 0 && newMsg?.author !== USERS.botName) {
        clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch(
            addMessage({
                text: "Hello! I`m Bot. Your message was: "+ newMsg.text,
                author: USERS.botName,
                role: 'recepient',
                id: `msg-${Date.now()}`,
              },
              chatId
            )
        );
      }, 1000);
  }
};