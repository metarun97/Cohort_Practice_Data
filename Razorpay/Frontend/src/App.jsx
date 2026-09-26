import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PaymentButton from './assets/PaymentButton';

const App = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/products/get-items',
        );
        setProduct(response.data.product);
      } catch {
        setError('Product details could not be loaded. Please try again.');
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return (
      <main className="product-page">
        <p className="product-status" role={error ? 'alert' : 'status'}>
          {error || 'Loading product…'}
        </p>
      </main>
    );
  }

  const { image, title, description, price } = product;
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: price?.currency || 'INR',
    maximumFractionDigits: 0,
  }).format(price?.amount / 100 ?? 0);

  const handleBuyNow = () => {
    alert('Proceed to Buy: ' + (title || 'Item'));
  };

  return (
    <main className="product-page">
      <article className="product-card">
        <div className="product-card__image-wrap">
          <img className="product-card__image" src={image} alt={title} />
          <span className="product-card__badge">Featured</span>
        </div>

        <div className="product-card__content">
          <p className="product-card__eyebrow">A LITTLE SOMETHING SPECIAL</p>
          <h1 className="product-card__title">{title}</h1>
          <p className="product-card__description">{description}</p>

          <div className="product-card__purchase">
            <p className="product-card__price">{formattedPrice}</p>
            <PaymentButton onClick={handleBuyNow} />
            {/* <button
              onClick={handleBuyNow}
              className="product-card__button"
              type="button"
            >
              Buy now <span aria-hidden="true">↗</span>
            </button> */}
          </div>
          <p className="product-card__note">Secure checkout · Easy returns</p>
        </div>
      </article>
    </main>
  );
};

export default App;
