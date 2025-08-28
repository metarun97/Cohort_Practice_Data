import { useState } from 'react';

const App2 = () => {
  const [username, setusername] = useState('Tarun');

  const changeHandler = () => {
    setusername('Vikash');
  };
  console.log(username);

  return (
    <>
      <h1>Name:{username}</h1>
      <button onClick={changeHandler}>Change Name</button>
    </>
  );
};

export default App2;
