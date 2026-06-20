import React from 'react';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import CounterEffect from './components/CounterEffect';
import CleanUp from './components/CleanUp';
import Api from './components/Api';
import Parent from './components/Parent';
import GrandChild from './components/GrandChild';
import ReducerHook from './components/ReducerHook';

const App = () => {
  return (
    <div className="w-full h-screen ">
      {/* <Counter /> */}
      {/* <RegistrationForm /> */}
      {/* <CounterEffect/> */}
      {/* <CleanUp /> */}
      {/* <Api /> */}
      {/* <Parent /> */}
      {/* <GrandChild /> */}
      <ReducerHook />
    </div>
  );
};

export default App;
