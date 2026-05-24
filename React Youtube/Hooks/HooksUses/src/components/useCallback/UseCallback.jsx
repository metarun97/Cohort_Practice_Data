import React, { memo, useCallback, useState } from 'react';

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button:  ${children}`);
  return (
    <button
      className={`px-4 py-1 text-black rounded ${children === 'Increment' ? 'bg-green-500' : 'bg-red-500'} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Increment:-
  const increment = useCallback(() => {
      setCount((prev) => prev + 1);
    },[]);

  // Decrement:-
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <div className="m-10">
      <h1 className="text-4xl text-semibold">{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
