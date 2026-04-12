import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlide";

export default function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Áo", price: 100 },
    { id: 2, name: "Quần", price: 200 },
  ];

  return (
    <div className="product-list">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p style={{color: "red"}}>{p.price}$</p>

          <button onClick={() => dispatch(addToCart(p))}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}