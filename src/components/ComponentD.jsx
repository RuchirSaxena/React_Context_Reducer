import { useContext } from "react";
import ComponentE from "./ComponentE";
import { CounterContext } from "../App";

export default function ComponentD() {
  const { counterState, counterDispatch } = useContext(CounterContext);
  return (
    <div className="App">
      <h4> HEllo From Component D</h4>
      <div> counter : {counterState} </div>
      <button onClick={() => counterDispatch("increment")}>Increment</button>
      <button onClick={() => counterDispatch("decrement")}>Decrement</button>
      <button onClick={() => counterDispatch("reset")}>Reset</button>
      <ComponentE />
    </div>
  );
}
