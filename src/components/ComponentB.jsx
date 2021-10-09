import ComponentC from "./ComponentC";
import { useContext } from "react";
import { UserContext, ProductContext } from "../App";

export default function ComponentB() {
  const user = useContext(UserContext);
  const Product = useContext(ProductContext);
  return (
    <div className="App">
      <h4>Hello from Component B</h4>
      <div>Using useContext</div>
      {user} - {Product}
      <ComponentC />
    </div>
  );
}
