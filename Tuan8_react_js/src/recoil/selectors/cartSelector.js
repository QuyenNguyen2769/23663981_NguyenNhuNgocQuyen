import { selector } from "recoil";
import { cartState } from "../atoms/cartAtom";

export const totalPriceState = selector({
    key: "totalPriceState",
    get: ({get}) => {
        const cart = get(cartState);
        return cart.reduce((sum,item) =>
        sum + item.price * item.quantity, 0);
    }
});