import { useCart } from "../hooks/useCart";
import { useNotification } from "../hooks/useNotification";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`Đã thêm ${product.name} vào giỏ ! 🛒`);
  }

  return (
    <div style={{ border: "1px solid", margin: 10, padding: 10 }}>
      <h4>{product.name}</h4>
      <p>{product.price} VND</p>
      <button onClick={handleAddToCart}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard;