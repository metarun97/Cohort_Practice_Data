import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  increasedByAmount,
} from './redux/features/counterSlice';
import { useState } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(5);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-500">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl text-center text-white">{count}</h1>
        <div className="flex items-center gap-2">
          <button
            className="px-5 py-2 rounded bg-green-500 hover:bg-green-600 text-white cursor-pointer"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            className="px-5 py-2 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <input
            type="number"
            className="px-4 py-2 border-0 rounded outline-0 bg-white"
            value={num}
            onChange={(e)=>{setNum(e.target.value)}}
          />
          <button
            className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={() => {
              dispatch(increasedByAmount(Number(num)));
            }}
          >
            Increased by Ammount
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
