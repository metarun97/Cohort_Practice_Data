import { Route, Routes } from 'react-router-dom';
import Products from './../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreateProduct from '../admin/CreateProduct';
import ProductDetails from '../admin/ProductDetails';
import { useSelector } from 'react-redux';
import UserProfile from '../pages/user/UserProfile';

const MainRoutes = () => {
  const { users } = useSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="/" element={<Products />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export default MainRoutes;
