import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import allProducts from './data/allProducts.json';
import CatagoryPage from './pages/CatagoryPage';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar />
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
            <Route path="category/:categoryName" element={<CatagoryPage/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
};

export default App;
