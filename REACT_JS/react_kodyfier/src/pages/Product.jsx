import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <div>
        <NavLink to="/product/men">Men</NavLink>
        <NavLink to="/product/women">Women</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
