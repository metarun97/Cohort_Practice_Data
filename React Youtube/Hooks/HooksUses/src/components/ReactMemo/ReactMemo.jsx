import React, { memo, useState } from 'react';
import ReactMemoChild from './ReactMemoChild';
import { useMemo } from 'react';

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  // const myBioData = {
  //   name: 'tarun',
  //   age: 30,
  // };

  const myBioData = useMemo(() => {
    return {
      name: 'tarun',
      age: 30,
    };
  }, []);

  return (
    <div>
      {/*  Example */}
      <h1> {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Me</button>
      <ReactMemoChild myBioData={myBioData} />
    </div>
  );
};

export default ReactMemo;
