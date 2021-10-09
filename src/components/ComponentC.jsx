import { UserContext, ProductContext } from "../App";

export default function ComponentC() {
  return (
    <div className="App">
      <h4>Hello from Component C</h4>
      <div>Using Provider - Old Way</div>
      <UserContext.Consumer>
        {(value) => {
          return (
            <ProductContext.Consumer>
              {(product) => {
                return (
                  <div>
                    {" "}
                    {value} - {product}
                  </div>
                );
              }}
            </ProductContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
