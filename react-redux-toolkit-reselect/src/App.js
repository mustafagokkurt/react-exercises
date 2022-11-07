import { useDispatch, useSelector } from "react-redux";
import { incrementdogs, incrementcats } from "./redux/counter";
import './App.css';
import { createSelector } from "reselect";

function App() {

  const dogsData = createSelector(state => state.counter.dogs,
    dogs => {
      console.log("dogs...");
      return dogs;
    });

  const catsData = createSelector(state => state.counter.cats,
    cats => {
      console.log("cats...");
      return cats;
    });

  const countDogs = useSelector(dogsData);
  const countCats = useSelector(catsData);

  const dispatch = useDispatch();

  return (
    <div className="App">

      <p>
        {countDogs}
      </p>
      <p>
        {countCats}
      </p>

      <button onClick={() => dispatch(incrementdogs())}>+</button>
      <button onClick={() => dispatch(incrementcats())}>-</button>

    </div>
  );
}

export default App;
