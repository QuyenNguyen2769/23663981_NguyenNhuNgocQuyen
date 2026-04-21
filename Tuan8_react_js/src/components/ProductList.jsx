import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;