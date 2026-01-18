import './App.css';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'iPhone 15 Pro với titanium'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Siêu mỏng nhẹ, hiệu năng cao'
  },
  {
    id: 3,
    name: 'AirPods Pro',
    price: 249,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Chống ồn chủ động'
  }
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="store-title">Tech Store</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;