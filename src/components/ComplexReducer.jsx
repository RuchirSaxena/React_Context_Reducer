import { useReducer } from "react";

const initalState = {
  firstCounter: 1,
  secondCounter: 10
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + action.payload
      };
    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - action.payload
      };
    case "increment2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.payload
      };
    case "decrement2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.payload
      };
    case "reset":
      return initalState;
    default:
      return state;
  }
};

export default function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="App">
      <h4>Understanding Usage of Complex Reducer similar to Redux</h4>
      <div>Counter 1: {count.firstCounter}</div>
      <div>Counter 2: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", payload: 1 })}>
        Increment counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", payload: 1 })}>
        Decrement counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
