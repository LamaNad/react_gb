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
import { Provider } from "react-redux";
import { store } from "./store";

const chatListArr = [
  {
    id: `chat1`,
    author: 'Ann',
    data: '31 mart 2022',
  },
  {
    id: `chat2`,
    author: 'Tomm',
    data: '30 mart 2022',
  },
  {
    id: `chat3`,
    author: 'Jess',
    data: '28 mart 2022',
  },
];

const initMessages = chatListArr.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

// APP
function App() {
  const [theme, setTheme] = useState("dark");
  const [chats, setChats] = useState(chatListArr);
  const [messages, setMessages] = useState(initMessages);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const addChat = (newChat) => {
    setChats(prevChats => [...prevChats, newChat]);
  };

  return(
    <Provider store={store} >
    <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/chat" element={<ChatScreen chats={chats} addChat={addChat} />}>
            <Route path=":id" element={<Chat messages={messages} addMessage={addMessage} />} />
          </Route>

          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </Provider>
  )

}

export default App;
