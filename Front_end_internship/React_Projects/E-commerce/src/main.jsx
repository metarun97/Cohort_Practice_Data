import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <MainRoutes />
  </BrowserRouter>
);
