import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter";
import './App.css';

function App() {

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">        
        <p>
          {count}
        </p>
        
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
