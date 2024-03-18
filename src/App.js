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
import PostForm from './components/PostForm';
import PostFormDisplay from './components/PostFormDisplay';
import FunctionClick from './components/FunctionClick';
import ParentCompo from './components/ParentCompo';



function App() {
  return (
    <div className="App">
      <h1>React Foundamental </h1> <br /><br />
      <Greet name="Lili" age="22" city="Dublin" />
      <Greet name="Rosi" age="28" city="London">
        <button>Action</button>
      </Greet>
      <Greet name="Niki" age="31" city="Dubai">
        <p><strong>This is children props</strong></p>
      </Greet>
      <br /><br />
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
      <h1 className="error">ERROR styled from appStyles.css</h1>
      <br />
      <h1 className={styles.success}>
        SUCCESS styled from appStyles.module.css
      </h1>
      <br />
      {/* <Form /> */}
      <FormComponent />
      <br />
      <PostList />
      <br />
      <PostFormDisplay />
      <br />
      <PostForm />
      <br />
      <br /> 
     <FunctionClick />
      <br />
      <br />
      <ParentCompo />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
