import React, { useReducer } from "react";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// import UnderstndingReducer from "./components/UnderstndingReducer";
// import ComplexReducer from "./components/ComplexReducer";
// import CounterNew from "./components/Counter";
import ComponentD from "./components/ComponentD";
import DaraFetchingOne from "./components/DataFetchingOne";
import DataFectingUsingReducer from "./components/DataFectingUsingReducer";

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
// export const UserContext = React.createContext();
// export const ProductContext = React.createContext();
export const CounterContext = React.createContext();

export default function App() {
  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="App">
      <h1>Hello from APP Component</h1>
      {/* <UnderstndingReducer />
      <ComplexReducer />
      <CounterNew />
      <UserContext.Provider value={"Ruchir"}>
        <ProductContext.Provider value={"Laptop"}>
          <h2>
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </h2>
        </ProductContext.Provider>
      </UserContext.Provider> 
      <CounterContext.Provider
        value={{ counterState: count, counterDispatch: dispatch }}
      >
        <ComponentD />
       
      </CounterContext.Provider>*/}
      {/* <DaraFetchingOne /> */}
      <DataFectingUsingReducer />
    </div>
  );
}
