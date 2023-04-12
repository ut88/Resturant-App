import Meals from "./components/Meals/Meals.js";
import Header from "./components/Layout/Header.js";
import React ,{ Fragment } from "react";
import Cart from "./components/Cart/Cart.js";
function App() {
  return (
    <Fragment>
      <Header /> 
      <main>
      <Cart />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
