import { useState, useMemo } from "react";
import { products } from "../data/products";

function ProductFilterMemo() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = useMemo(() => {
    console.time("filter_memo");
    const result = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price >= minPrice &&
      p.price <= maxPrice
    );
    console.timeEnd("filter_memo");
    return result;
  }, [search, minPrice, maxPrice]);

  const total = useMemo(() => {
    console.time("total_memo");
    const sum = filteredProducts.reduce((s, p) => s + p.price, 0);
    console.timeEnd("total_memo");
    return sum;
  }, [filteredProducts]);

  return (
    <div>
      <h2>Đã tối ưu (useMemo)</h2>

      <input
        placeholder="Search product name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <input
        type="number"
        value={minPrice}
        onChange={e => setMinPrice(Number(e.target.value))}
      />

      <input
        type="number"
        value={maxPrice}
        onChange={e => setMaxPrice(Number(e.target.value))}
      />

      <h3>Total: {total}</h3>
      <p>Products: {filteredProducts.length}</p>

      <ul>
        {filteredProducts.slice(0, 5).map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilterMemo;
