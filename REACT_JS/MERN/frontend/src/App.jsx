import React from 'react';
import MainRoutes from './routes/MainRoutes';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
