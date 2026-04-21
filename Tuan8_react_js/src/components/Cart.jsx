import { useRecoilValue } from "recoil";
import { totalPriceState } from "../recoil/selectors/cartSelector";
import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, increase, decrease } = useCart();
  const total = useRecoilValue(totalPriceState);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>

          <button onClick={() => decrease(item.id)} style={{margin:'5px'}}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increase(item.id)} style={{margin:'5px'}}>+</button>
        </div>
      ))}

      <h3>Total: {total} VND</h3>
    </div>
  );
}

export default Cart;