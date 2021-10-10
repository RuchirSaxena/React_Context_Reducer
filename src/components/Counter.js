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

export default function CounterNew() {
  // When Dealing with multiple state variable have same state transitions, it good to use multip[e reducer having same reducer fuction ]
  const [count, dispatch] = useReducer(reducer, initalState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initalState);
  return (
    <div className="App">
      <h4>Understanding Usage of Reducer</h4>
      <div>Counter(1) - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <div>Counter(2) - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}
