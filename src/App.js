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
import { Nationalize } from "./screens/Nationalize/Nationalize";


// APP
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return(
    <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nationalize" element={<Nationalize />} />

          <Route path="/chat" element={ <ChatScreen /> } >
            <Route path=":id" element={ <Chat /> } />
          </Route>

          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )

}

export default App;
