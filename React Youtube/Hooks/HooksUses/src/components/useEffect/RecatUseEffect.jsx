import React from 'react';
import { useState, useEffect } from 'react';

const RecatUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count Value:', count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn"
      >
        Increment
      </button>
    </div>
  );
};

export default RecatUseEffect;
