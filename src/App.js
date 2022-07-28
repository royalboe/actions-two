import "./App.css";
import Counter from "./features/counter/Counter";
import Display from "./features/counter/Display";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Counter />
        <Display />
      </div>
    </div>
  );
}

export default App;
