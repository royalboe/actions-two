import "./App.css";
// import Counter from "./components/Counter";
// import CounterUseReducer from "./components/CounterUseReducer";
import Todo from "./components/Todo";
// import Display from "./features/counter/Display";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        {/* <CounterUseReducer />
        <Counter /> */}
        <Todo />
        {/* <Display /> */}
      </div>
    </div>
  );
}

export default App;
