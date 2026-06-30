import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Products from './../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import About from './../pages/About';
import Cart from '../pages/Cart';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
