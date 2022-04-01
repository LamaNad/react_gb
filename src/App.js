import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import './style.scss';

const Home = () => <h4>Homepage</h4>;

function App() {

  return(
    <BrowserRouter>
      
      <Link to ="/">Home</Link>
      <Link to ="/chat">Chat</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
