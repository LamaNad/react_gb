import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Chat } from "./screens/Chat/Chat";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />}>
        </Route>
        <Route path="*" element={<h4>404</h4>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
