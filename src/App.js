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

const message = `It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged.`;
const chatListArr = [
  {
    id: `chat1`,
    author: 'Ann',
    lastMessage: message,
    data: '31 mart 2022',
  },
  {
    id: `chat2`,
    author: 'Tomm',
    lastMessage: message,
    data: '30 mart 2022',
  },
  {
    id: `chat3`,
    author: 'Jess',
    lastMessage: message,
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

  return(
    <Provider store={store} >
    <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/chat" element={<ChatScreen chats={chats} />}>
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
