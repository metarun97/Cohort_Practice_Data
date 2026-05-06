import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incBy3 = () => {
    // setCount(count + 3);
    setCount((prev) => prev + 3);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">{count}</h1>
      <button
        className="bg-blue-500 p-1.5 text-white font-semibold rounded cursor-pointer hover:bg-blue-600 transition"
        onClick={incBy3}
      >
        +3
      </button>
    </div>
  );
};

export default Counter;
