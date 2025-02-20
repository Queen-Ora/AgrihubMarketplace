import Cart from "./Components/cart";
import Home from "./Components/Home";
import CardContext from "./Components/Context/CardContext";
import ProductList from "./Pages/ProductList";
import { useState } from "react";

const App = () => {

    const [cart, setCart] = useState([]);
  
  return (
    <div>
      <CardContext.Provider value={{ cart: cart, setCart: setCart }}>
        <Home />
        <ProductList />
        <Cart />
      </CardContext.Provider>
    </div>
  );
};

export default App;
