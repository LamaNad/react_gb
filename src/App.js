import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  COMPONENTS
import { Chat } from "./components/Chat/Chat";
//  SCREENS
import { Home } from "./screens/Home/Home";
import { Chat as ChatScreen } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
//  UTILS
import { ThemeContext } from "./utils/ThemeContext";
//  REACT-REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// STORE
import { addChat, deleteChat } from "./store/chats/actions";
import { addMessage, clearMessagesForChat, initMessagesForChat } from "./store/messages/actions";
import { selectChats } from "./store/chats/selectors";
import { selectMessages } from "./store/messages/selectors";


// APP
function App() {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("dark");

  const chats = useSelector(selectChats, shallowEqual);
  const messages = useSelector(selectMessages);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const addNewMessage = (newMsg, id) => {
    dispatch(addMessage(newMsg, id));
  };

  const addNewChat  = (newChat) => {
    dispatch(addChat(newChat));
    dispatch(initMessagesForChat(newChat.id));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessagesForChat(id));
  };

  return(
    <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/chat" element={
              <ChatScreen 
                chats={ chats } 
                addChat={ addNewChat } 
                deleteChat={ removeChat } 
              /> 
              } 
            >
            <Route path=":id" element={
              <Chat 
                messages={messages} 
                addMessage={addNewMessage} 
              />
              } 
            />
          </Route>

          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )

}

export default App;
