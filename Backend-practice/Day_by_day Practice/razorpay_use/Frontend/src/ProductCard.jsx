import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onBuyNow }) => {
  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-badge">Premium</div>
      </div>

      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="price-container">
            <span className="currency">{product.price.currency}</span>
            <span className="amount">
              {(product.price.amount / 100).toFixed(2)}
            </span>
          </div>

          <button className="buy-now-btn" onClick={handleBuyNow}>
            <span className="btn-text">Buy Now</span>
            <svg
              className="btn-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
