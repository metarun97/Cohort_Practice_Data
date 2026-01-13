import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SeacrchContextData } from './context/SearchContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SeacrchContextData>
        <ToastContainer />
        <App />
    </SeacrchContextData>
  </BrowserRouter>
);
