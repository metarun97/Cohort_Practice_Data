import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import Services from '../components/Services';
import About from '../components/About';
import ProductDetail from '../components/Productdetail';
import ServiceDetail from '../components/ServiceDetail';
import ServiceUpdate from '../components/ServiceUpdate';

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details/:name" element={<ProductDetail />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/details" element={<ServiceDetail />} />
          <Route path="/services/update" element={<ServiceUpdate />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Mainroute;
