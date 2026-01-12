// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import PageNotFound from './pages/PageNotFound';
// import allProducts from './data/allProducts.json';
// import CatagoryPage from './pages/CatagoryPage';
import Navbar from './components/Navbar';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Routes>
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
            <Route path="category/:categoryName" element={<CatagoryPage  allProducts={allProducts}/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
