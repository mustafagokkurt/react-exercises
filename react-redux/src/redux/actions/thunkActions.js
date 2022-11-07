import * as actionCreators from "./actionCreators";

export function getTodosApiRequest() {
  return async (dispatch) => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => dispatch(actionCreators.getTodosApi(data)));
  };
}