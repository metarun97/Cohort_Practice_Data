import React from 'react';
import MainRoutes from './routes/MainRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
