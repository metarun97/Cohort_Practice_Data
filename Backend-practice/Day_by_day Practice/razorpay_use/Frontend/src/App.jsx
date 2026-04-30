import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products/get-item')
      .then((response) => {
        console.log(response.data.product);
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (productData) => {
    console.log('Buy Now clicked for:', productData);
    // Add your payment/cart logic here
    alert(`Product "${productData.title}" added to cart!`);
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading">Loading product...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {product ? (
        <ProductCard product={product} onBuyNow={handleBuyNow} />
      ) : (
        <div className="no-product">No product found</div>
      )}
    </div>
  );
};

export default App;
