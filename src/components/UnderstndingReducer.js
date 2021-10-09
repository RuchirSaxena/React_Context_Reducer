import { useReducer } from "react";

const initalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 1;
    default:
      return state;
  }
};

export default function UnderstndingReducer() {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="App">
      <h4>Understanding Usage of Reducer</h4>
      <div>Count => {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
