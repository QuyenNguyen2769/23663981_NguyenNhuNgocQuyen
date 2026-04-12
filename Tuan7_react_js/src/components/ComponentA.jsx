import { useSelector } from "react-redux";

export default function ComponentA() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}