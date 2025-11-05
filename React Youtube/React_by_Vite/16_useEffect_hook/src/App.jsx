import { useEffect, useState } from 'react';

const App = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  const aChange = () => {
    console.log('A is running...');
  };
  const bChange = () => {
    console.log('B is running...');
  };

  useEffect(() => {
    // console.log('useEffect is running...');
    bChange();
  }, [B]);

  return (
    <div>
      <h1>{A}</h1>
      <h1>{B}</h1>
      <button
        onClick={() => {
          setA(A + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(B - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
