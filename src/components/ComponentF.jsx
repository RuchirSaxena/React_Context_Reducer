import { useContext } from "react";
import { CounterContext } from "../App";

export default function ComponentA() {
  const { counterState, counterDispatch } = useContext(CounterContext);
  return (
    <div className="App">
      <h4> HEllo From Component F</h4>
      <div> counter : {counterState} </div>
      <button onClick={() => counterDispatch("increment")}>Increment</button>
      <button onClick={() => counterDispatch("decrement")}>Decrement</button>
      <button onClick={() => counterDispatch("reset")}>Reset</button>
    </div>
  );
}
