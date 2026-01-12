import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import CatagoryPage from "../pages/CatagoryPage";
import PageNotFound from "../pages/PageNotFound";
import allProducts from '../data/allProducts.json';
import Cart from './../pages/Cart';

const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home allProducts={allProducts} />} />
        <Route
          path="/products"
          element={<Products allProducts={allProducts} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails allProducts={allProducts} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="category/:categoryName"
          element={<CatagoryPage allProducts={allProducts} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default MainRoutes;
