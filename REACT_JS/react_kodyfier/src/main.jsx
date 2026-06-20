import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BioProvider } from './store/context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <BioProvider>
    </BioProvider> */}
  </StrictMode>,
);
