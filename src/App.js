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
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";


// APP
function App() {
  const [theme, setTheme] = useState("dark");
  const [authed, setAuthed] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  return(
    <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
          </Route>

          <Route path="/profile" element={< PrivateRoute authed={authed} />} > 
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/chat" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={ <ChatScreen /> } >
              <Route path=":id" element={ <Chat /> } />
            </Route>
          </Route>

          <Route path="/nationalize" element={<Nationalize />} />

          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )

}

export default App;
