import ProductCard from '../components/ProductCard';

{
  products.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      inCart={cartItems.some(item => item.id === product.id)}
      onClick={() => handleCart(product)}
    />
  ))
}
