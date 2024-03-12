import './App.css';
import Greet from './components/Greet';

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
    </div>
  );
}

export default App;
