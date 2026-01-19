import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import { store } from './redux/store.js';
// import { Provider } from 'react-redux';
import App2 from './App2.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App2 />
  </Provider>,
);
