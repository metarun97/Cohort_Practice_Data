import React, { useEffect, useState } from 'react';

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Couter value:', count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-green-500 px-3 py-1.5 text-white rounded cursor-pointer"
      >
        Inc
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="bg-red-500 px-3 py-1.5 text-white rounded cursor-pointer"
      >
        Dec
      </button>
    </div>
  );
};

export default CounterEffect;
