import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState('dsbdlsakdbasl');

  const length = num.length; // drived state because it has relation to the state

  const handleInc = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="ml-[50%]">
      <h1>{count}</h1>
      {/* <p>{length}</p> */}
      <button
        className="px-5 py-2 rounded bg-green-400 text-white cursor-pointer"
        onClick={handleInc}
      >
        Increment
      </button>
      <button
        className="px-5 py-2 rounded bg-red-400 text-white cursor-pointer"
        onClick={handleDec}
      >
        Decrement
      </button>
      <button
        className="px-5 py-2 rounded bg-yellow-400 text-white cursor-pointer"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
