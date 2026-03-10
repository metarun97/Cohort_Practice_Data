import { useCallback, useState, useRef } from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';

const App = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(99);
  const inputRef = useRef();

  // const Myh1 = styled.h1`
  //   color: red;
  //   font-size: 100px;
  //   background-color: ${(props) => props.bg};
  // `;

  const Myh1 = styled.h1({
    color: 'red',
    fontSize: '100px',
  });

  const ingredients = useCallback(() => {
    console.log('Recipe Ingredients!');
  }, [sub]);

  const watchHandler = () => {
    // console.log(inputRef.current.value);
    console.log(inputRef.current);
    inputRef.current.style.color = 'red';
  };

  return (
    <div className="bg-slate-700 w-full h-screen text-white">
      <div className="p-10">
        <Myh1 bg="pink">Let's learn useRef</Myh1>
        <button
          onClick={() => setAdd(add + 1)}
          className="bg-green-500 px-6 py-2 text-white rounded text-5xl cursor-pointer"
        >
          {add}
        </button>
        <button
          onClick={() => setSub(sub - 1)}
          className="bg-red-500 px-5 py-2 text-white rounded text-5xl cursor-pointer"
        >
          {sub}
        </button>
        <Recipe ing={ingredients} />
        <hr className="my-10" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter anything..."
          className="p-5 border-b border-amber-50 outline-none text-2xl"
        />
        <button
          onClick={watchHandler}
          className="px-6 py-2 rounded bg-blue-500 cursor-pointer "
        >
          Value
        </button>
      </div>
    </div>
  );
};

export default App;
