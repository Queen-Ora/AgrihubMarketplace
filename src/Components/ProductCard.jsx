import { useContext } from "react";
import CardContext from "./Context/CardContext";



const ProductCard = ({product,}) => {
  console.log(product)

  const {id, image, name, description, price} = product;

  const {cart, setCart}= useContext(CardContext);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item       
        );
      } else return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  return (
    <div className="container">
      
          <div key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Prix: {price} Fcfa</p>
            <button onClick={() => addToCart(product)}>Ajouter au Panier</button>
          </div>
        
      

    </div>
  )
};

export default ProductCard