import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../features/cart/cartSlide";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
  <h2>Giỏ hàng</h2>

  <div className="cart-header">
    <span>Tên</span>
    <span>Giá</span>
    <span>Số lượng</span>
    <span>Hành động</span>
  </div>

  {items.map((item) => (
    <div key={item.id} className="cart-row">
      <span>{item.name}</span>
      <span>{item.price}$</span>
      <span>{item.quantity}</span>

      <div>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <button onClick={() => dispatch(removeItem(item.id))}>Xóa</button>
      </div>
    </div>
  ))}

  <h3>Tổng: {total}$</h3>
</div>
  );
}