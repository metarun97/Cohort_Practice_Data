import { createContext, useState } from 'react';

export const cartContext = createContext();

export const CartContextData = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart:-
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart:-

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};
