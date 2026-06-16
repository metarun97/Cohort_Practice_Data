import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='ml-[50%]'>
      <h1>{count}</h1>
      <button className='px-5 py-2 rounded bg-green-400 text-white cursor-pointer'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button className='px-5 py-2 rounded bg-red-400 text-white cursor-pointer'
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
