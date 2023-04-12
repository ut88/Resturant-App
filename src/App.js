import Meals from "./components/Meals/Meals.js";
import Header from "./components/Layout/Header.js";
import React ,{ Fragment,useState } from "react";
import Cart from "./components/Cart/Cart.js";
function App() {
  const [CartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
     setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
       {CartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} /> 
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
