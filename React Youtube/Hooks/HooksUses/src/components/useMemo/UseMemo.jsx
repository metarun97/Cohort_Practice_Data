import React, { memo, useMemo, useState } from 'react';

const ExpensiveComponent = () => {
  const sum = () => {
    console.log('Calculating sum');
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);

  // const total = sum();
  return <p>Sum: {total}</p>;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Parent Re-render: {count}</h1>
    </div>
  );
};

export default UseMemo;
