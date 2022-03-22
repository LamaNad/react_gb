import './App.css';
import { Message } from './components/Message/Message';

const name = 'Tomm';
const lastname = 'Saar';

function App() {

  const foo = () => {
    alert("Hello");
  };

  return (
    <div className="App">
      <Message name={name} lastname={lastname} foo={foo} clrDark={true} />
      <Message name={name} lastname={lastname} foo={foo} />
      <Message name={name} lastname={lastname} foo={foo} />
    </div>
  );
}

export default App;
