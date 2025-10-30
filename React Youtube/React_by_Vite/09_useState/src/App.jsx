import { useState } from 'react';

const App = () => {
  const [Num, setNum] = useState(0);

  function increment() {
    setNum(Num + 1);
  }
  function decrement() {
    if (Num > 0) {
      setNum(Num - 1);
    }
  }

  function jumpFive() {
    setNum(Num + 5);
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={jumpFive}>Jump +5</button>
    </div>
  );
};

export default App;
