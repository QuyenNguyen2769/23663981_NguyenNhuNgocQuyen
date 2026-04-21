import { useCart } from "../hooks/useCart";
import { useNotification } from "../hooks/useNotification";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid", margin: 10, padding: 10 }}>
      <h4>{product.name}</h4>
      <p>{product.price} VND</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;