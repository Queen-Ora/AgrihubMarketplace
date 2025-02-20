import  { useContext, } from "react";
import CardContext from "./Context/CardContext";

const Cart = () => {

  const {cart , setCart} = useContext(CardContext);

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

console.log(cart)
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  return (
    <>
      {/* <h2>Cart</h2> */}
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>
            {product.quantity} x ${product.price?.toFixed(2)}
          </p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
          <button onClick={() => increaseQuantity(product.id)}>+</button>
        </div>
      ))}
    </>
  );
};

export default Cart;
