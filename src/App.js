import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Chat } from "./components/Chat/Chat";
import { Chat as ChatScreen } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/chat" element={<ChatScreen />}>
          <Route path=":id" element={<Chat />} />
        </Route>

        <Route path="*" element={<h4>404</h4>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
