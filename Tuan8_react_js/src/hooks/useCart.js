import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product) => {
    const exist = cart.find(i => i.id === product.id);

    if (exist) {
      setCart(cart.map(i =>
        i.id === product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, quantity: i.quantity + 1 } : i
    ));
  };

  const decrease = (id) => {
    setCart(cart
      .map(i =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter(i => i.quantity > 0)
    );
  };

  return { cart, addToCart, increase, decrease };
};