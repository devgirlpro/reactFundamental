import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
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
      <br />
      <UserGreeting />
      <br />
      <br />
      <NameList />
      <br />
      <br />
      <Stylesheet />
    </div>
  );
}

export default App;
