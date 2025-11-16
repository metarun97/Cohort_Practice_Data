import { useState } from 'react';
import '../CSS/counter.css';

const Counter = () => {
  const [count, setcount] = useState(0);

  const incFunc = () => {
    setcount(count + 1);
  };
  const decFunc = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const resetFunc = () => {
    setcount(0);
  };

  return (
    <div className="main">
      <div className="counterSec">
        <h1>{count}</h1>
        <div className="btns">
          <button onClick={incFunc} className="inc btn">
            +
          </button>
          <button onClick={decFunc} className="dec btn">
            -
          </button>
          <button onClick={resetFunc} className="res btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
