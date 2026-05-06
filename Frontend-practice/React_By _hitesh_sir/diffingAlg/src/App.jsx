import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(15);

  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };
  // Normally setCount(count +1) lete h to bunch of packages hota hai same update chaiye ye count ki initial state value le raha h jo ki 15 hi h hamesha.
  // Normally setCount((prevCount) => (prevCount +1)) lete h to ab bunch of packages nai hota hai same update ho rahe hai but ab ye previous state le raha h so ye changes prevCount k behalf pe karega.
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={decCount}>-</button>
    </div>
  );
};

export default App;
