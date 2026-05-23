import React, { useState } from 'react';

const ReactMemoChild = React.memo(() => {
  console.log('child render');

  return <h1>Child component</h1>;
});

// const ReactMemoChild = React.memo(({ name }) => {
//   console.log('child render');

//   return <h1>Child component:{name}</h1>;
// });

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {/* 1st Example */}
      <ReactMemoChild />
      {/* 2nd Example */}
      {/* <ReactMemoChild name="Tarun" />
      <ReactMemoChild name="Varun" /> */}
    </div>
  );
};

export default ReactMemo;
