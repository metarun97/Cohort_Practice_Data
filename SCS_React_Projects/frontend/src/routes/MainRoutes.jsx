import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Products from './../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreateProduct from '../admin/CreateProduct';
import ProductDetails from '../admin/ProductDetails';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
    </Routes>
  );
};

export default MainRoutes;
