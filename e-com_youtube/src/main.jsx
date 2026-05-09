import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import MainLayout from './components/pages/MainLayout.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/cart'} element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
