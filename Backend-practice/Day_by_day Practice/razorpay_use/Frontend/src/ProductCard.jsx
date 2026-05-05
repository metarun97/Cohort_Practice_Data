import React from 'react';
import './ProductCard.css';
import PaymentButton from './components/PaymentButton';

const ProductCard = ({ product, onBuyNow }) => {
  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
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
            <span className="btn-text">
              <PaymentButton />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
