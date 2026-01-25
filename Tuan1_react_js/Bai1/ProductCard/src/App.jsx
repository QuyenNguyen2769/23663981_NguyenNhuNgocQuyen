import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      anh: "img/OIP.jpg",
      ten: "Điện thoại iPhone 17 Pro 256GB",
      gia: 34690000
    },
    {
      id: 2 ,
      anh: "img/OIP.jpg",
      ten: "Điện thoại iPhone 17 Pro 256GB",
      gia: 34690000
    }
  ];

  return (
    <>
      <section>
        <div className='container'>
          <h1>Bài 1: ProductCard</h1>
          {products.map(product => (
            <ProductCard 
              key={product.id}
              anh={product.anh}
              ten={product.ten}
              gia={product.gia}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;