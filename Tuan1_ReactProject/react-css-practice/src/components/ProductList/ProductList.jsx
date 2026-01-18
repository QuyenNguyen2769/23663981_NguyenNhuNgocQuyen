import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
  // Dữ liệu mẫu
  const products = [
    { id: 1, image: 'https://via.placeholder.com/300x200', name: 'Product 1', price: 29.99 },
    { id: 2, image: 'https://via.placeholder.com/300x200', name: 'Product 2', price: 39.99 },
    { id: 3, image: 'https://via.placeholder.com/300x200', name: 'Product 3', price: 49.99 },
    { id: 4, image: 'https://via.placeholder.com/300x200', name: 'Product 4', price: 59.99 },
    { id: 5, image: 'https://via.placeholder.com/300x200', name: 'Product 5', price: 69.99 },
    { id: 6, image: 'https://via.placeholder.com/300x200', name: 'Product 6', price: 79.99 },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;