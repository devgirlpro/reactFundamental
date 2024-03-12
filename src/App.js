import './App.css';
 import Greet from './components/Greet';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <h1>React Foundamental </h1>
      <Greet name="Lili" age="22" city="Dublin" />
      <Greet name="Rosi" age="28" city="London">
        <button>Action</button>
      </Greet>

      <Greet name="Niki" age="31" city="Dubai">
        <p>This is children props</p>
      </Greet>
      <br />
      <Message />
      <br />
      <ParentComponent />
      
    </div>
  );
}

export default App;
