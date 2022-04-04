import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ChatList } from "./components/ChatList/ChatList";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatList />}>
        </Route>
        <Route path="*" element={<h4>404</h4>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
