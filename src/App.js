import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import FormComponent from './components/FormComponent';
import PostList from './components/PostList';




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
      <NameList />
      <br />
      <Stylesheet />
      <br />
      <Inline />
      <br />
      <h1 className='error' >ERROR styled from appStyles.css</h1>
      <br />
      <h1 className={styles.success} >SUCCESS styled from appStyles.module.css</h1>
      <br />
     {/* <Form /> */}
     <FormComponent />
      <br />
      <PostList />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;



