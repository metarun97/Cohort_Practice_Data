import { Route, Routes } from "react-router-dom";
import Home from './../components/Home';
import Products from './../components/Products';
import About from './../components/About';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
