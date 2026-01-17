import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import DataContextFunc from './context/DataContextFunc.jsx';

createRoot(document.getElementById('root')).render(
  <DataContextFunc>
    <App />
  </DataContextFunc>,
);
