import { useEffect, useState } from 'react';

const App = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  const changeA = () => {
    console.log('A changing');
  };
  const changeB = () => {
    console.log('B changing');
  };

  useEffect(() => {
    console.log('UseEffect running...');
    changeB();
  },[a]);

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={() => seta(a + 1)}>Change A</button>
      <button onClick={() => setb(b - 1)}>Change B</button>
    </div>
  );
};

export default App;
