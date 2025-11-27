import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Product from './components/pages/Product';
import NotFound from './components/pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Men from './components/pages/Men';
import Women from './components/pages/Women';

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
