import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export default function ComponentB() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())} style={{marginRight: "10px"}}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
}