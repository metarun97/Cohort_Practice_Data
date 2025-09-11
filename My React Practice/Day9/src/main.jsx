import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Wrapper from './Wrapper.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <div className='w-screen h-screen flex px-10 gap-20'>
    <Wrapper>
      <App />
      <ToastContainer position="top-center" />
    </Wrapper>
  </div>
);
