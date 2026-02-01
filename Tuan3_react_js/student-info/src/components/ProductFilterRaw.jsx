import { useState } from "react";
import { products } from "../data/products";

function ProductFilterRaw() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  console.time("filter_raw");
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    p.price >= minPrice &&
    p.price <= maxPrice
  );
  console.timeEnd("filter_raw");

  console.time("total_raw");
  const total = filteredProducts.reduce((sum, p) => sum + p.price, 0);
  console.timeEnd("total_raw");

  return (
    <div>
      <h2>Chưa tối ưu</h2>

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

export default ProductFilterRaw;
