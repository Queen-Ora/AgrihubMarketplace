import ProductCard from "../Components/ProductCard" 
const ProductList = () => {
    const products = [
        { id: 1, name: "Mais", price: 5000 , image:"/public/img/mais.jpg"},
        { id: 2, name: "Oignon", price: 7000 , image: "/public/img/oignon.jpg"},
        { id: 3, name: "Soja", price: 1000 , image:"/public/img/soja.jpg"},
      ];
    
    
  return (
    <div>
         {products.map((product) => (
        <ProductCard 
        key={product.id}
         product={product}
         />
      ))}
    </div>
  )
}

export default ProductList