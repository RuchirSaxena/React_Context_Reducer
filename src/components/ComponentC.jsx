import { UserContext, ProductContext } from '../App';

export default function ComponentC() {
  return (
    <div className="App">
      <h4>Hello from Component C</h4>
       <UserContext.Consumer>
         {
           (value) => {
             return (
               <ProductContext.Consumer>
                 {
                   product => {
                   return <div> User Contest value {value}, Product Context Value {product}</div>
                   }
                 }
               </ProductContext.Consumer>
                
             )
           }
         }
       </UserContext.Consumer>
    </div>
  );
}
