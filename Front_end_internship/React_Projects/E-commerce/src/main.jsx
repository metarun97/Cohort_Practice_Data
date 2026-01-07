import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SeacrchContextData } from './context/SearchContext.jsx';

createRoot(document.getElementById('root')).render(
  <SeacrchContextData>
    <App />
  </SeacrchContextData>
);
