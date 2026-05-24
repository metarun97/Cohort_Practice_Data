import React, { useEffect, useState } from 'react';

const UseEffectChellange = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Input Value:', input);
  }, [input]);

  useEffect(() => {
    document.title = `count:  ${count}`;
  }, [count]);

  return (
    <div>
      <h1>count:{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Input Value:{input}</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </div>
  );
};

export default UseEffectChellange;
