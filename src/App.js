import React from "react";
import ComponentA from "./components/ComponentA";
import UnderstndingReducer from "./components/UnderstndingReducer";

export const UserContext = React.createContext();
export const ProductContext = React.createContext();
export default function App() {
  return (
    <div className="App">
      <h1>Hello from APP Component</h1>
      <UnderstndingReducer />
      {/* <UserContext.Provider value={"Ruchir"}>
        <ProductContext.Provider value={"Laptop"}>
          <h2>
            <ComponentA />
          </h2>
        </ProductContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}
