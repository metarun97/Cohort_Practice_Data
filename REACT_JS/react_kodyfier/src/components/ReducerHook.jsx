import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  if (action.type === 'Increment') return { count: state.count + 1 };
  if (action.type === 'Decrement') return { count: state.count - 1 };
  if (action.type === 'Reset') return { count: 0 };
  return state;
};

const ReducerHook = () => {
  // const [count, setCount] = useState(0);

  const initialValue = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{state.count}</h1>
      {/* <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button> */}
      <button
        onClick={() => {
          dispatch({ type: 'Increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Decrement' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Reset' });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ReducerHook;
