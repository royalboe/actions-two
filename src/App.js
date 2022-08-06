// import "./App.css";
// import Counter from "./components/Counter";
// import CounterUseReducer from "./components/CounterUseReducer";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Display from "./features/counter/Display";

function App() {
  return (
    <div className="App">
      {/* <CounterUseReducer />
        <Counter /> */}
      <Header />
      <Todo />
      <Footer />
      {/* <Display /> */}
    </div>
  );
}

export default App;
