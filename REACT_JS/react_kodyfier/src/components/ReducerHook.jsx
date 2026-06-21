import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  const MAX_COUNT = 100;
  const MIN_COUNT = 10;
  // if (action.type === 'Increment')
  //   return { count: state.count < MAX_COUNT ? state.count + 1 : state.count };
  //   return { count: state.count > MIN_COUNT ? state.count - 1 : MIN_COUNT };
  // if (action.type === 'Reset') return { count: MIN_COUNT };
  // return state;

  /* Preserving the state concept by spread operater with state value */
  switch (action.type) {
    case 'Increment':
      return {
        ...state,
        count: state.count < MAX_COUNT ? state.count + state.inc : state.count,
      };

      break;
    case 'Decrement':
      return {
        ...state,
        count: state.count > MIN_COUNT ? state.count - 1 : MIN_COUNT,
      };

      break;
    case 'Reset':
      return { ...state, count: MIN_COUNT };
      break;

    default:
      return state;
  }
};

const ReducerHook = () => {
  // const [count, setCount] = useState(0);

  const initialValue = { count: 10, inc: 5, dec: 10 };
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
