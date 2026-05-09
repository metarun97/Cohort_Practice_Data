import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

const MainLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

export default MainLayout;
