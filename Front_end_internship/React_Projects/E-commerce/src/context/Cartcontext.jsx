import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextData = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart function:-
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => prev.id === product.id);

      if (exist) {
        return prev.map((item) =>
          prev.id === product.id ? { ...item, quantity: quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Remove from cart function:-
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
    {children}
  </CartContext.Provider>;
};

export default CartContextData;
