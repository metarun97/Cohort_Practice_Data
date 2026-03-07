// import Products from './../pages/Products';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import CreateProduct from '../admin/CreateProduct';
// import ProductDetails from '../admin/ProductDetails';
// import UserProfile from '../pages/user/UserProfile';
// import PageNotFound from '../pages/PageNotFound';
// import AuthWrapper from './AuthWrapper';
// import Cart from '../pages/Cart';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import UnauthWrapper from './unAuthWrapper';

const Cart = lazy(() => import('../pages/Cart'));
const AuthWrapper = lazy(() => import('./AuthWrapper'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const UserProfile = lazy(() => import('../pages/user/UserProfile'));
const ProductDetails = lazy(() => import('../admin/ProductDetails'));
const CreateProduct = lazy(() => import('../admin/CreateProduct'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Products = lazy(() => import('./../pages/Products'));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route
        path="/login"
        element={
          <UnauthWrapper>
            <Login />
          </UnauthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnauthWrapper>
            <Register />
          </UnauthWrapper>
        }
      />
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
