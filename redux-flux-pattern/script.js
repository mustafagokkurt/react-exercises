//////// reducer //////////////
const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  //////// reducer //////////
  
  //////// store start //////////
  
  const createStore = (reducer) => {
    let state;
    let listeners = [];
    
    const getState = () => state;
    
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
    
    const subscribe = (listener) => {
      listeners.push(listener);
      return() => {
        listeners = listeners.filter(l => l !== listener);
      };
    };
  
    dispatch({});
    
    return { getState, dispatch, subscribe };
  }
  
  const store = createStore(counter);
  //////// store end //////////
  
  //////// render start //////////
  
  const render = () => {
    document.getElementById("value").innerText = store.getState();
  };
  //////// render end //////////
  
  
  store.subscribe(render);
  //store.subscribe(render)(); //unsubscribe Currying
  render();
  
  document.getElementById("btn_increase").addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
  })
  
  document.getElementById("btn_decrease").addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
  })
  
  
  
  