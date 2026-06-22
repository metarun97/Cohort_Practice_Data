import React from 'react';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import CounterEffect from './components/CounterEffect';
import CleanUp from './components/CleanUp';
import Api from './components/Api';
import Parent from './components/Parent';
import GrandChild from './components/GrandChild';
import ReducerHook from './components/ReducerHook';
import Navbar from './components/Navbar';
import MainRoutes from './routes/MainRoutes';
import Search from './components/Search';
import UseIdHook from './components/UseIdHook';
import UseActionState from './components/UseActionState';
import Products from './components/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="w-full h-screen ">
      {/* <Counter /> */}
      {/* <RegistrationForm /> */}
      {/* <CounterEffect/> */}
      {/* <CleanUp /> */}
      {/* <Api /> */}
      {/* <Parent /> */}
      {/* <GrandChild /> */}
      {/* <ReducerHook /> */}
      {/* <Navbar /> */}
      {/* <MainRoutes /> */}
      {/* <Search /> */}
      {/* <UseIdHook /> */}
      {/* <UseActionState /> */}
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    </div>
  );
};

export default App;
