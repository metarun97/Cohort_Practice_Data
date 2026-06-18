import React from 'react';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import CounterEffect from './components/CounterEffect';
import CleanUp from './components/CleanUp';
import Api from './components/Api';

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      {/* <Counter /> */}
      {/* <RegistrationForm /> */}
      {/* <CounterEffect/> */}
      {/* <CleanUp /> */}
      <Api />
    </div>
  );
};

export default App;
