import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
