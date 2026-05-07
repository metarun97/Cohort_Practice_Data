import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState(null);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl py-2 px-3">
          <button
            onClick={() => setColor('red')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('purple')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor('olive')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'olive' }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor('aquamarine')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'aquamarine' }}
          >
            Aquamarine
          </button>
          <button
            onClick={() => setColor('black')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'black' }}
          >
            Black
          </button>
          <button
            onClick={() => setColor('pink')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor('gray')}
            className="outline px-4 py-2 rounded-full text-white cursor-pointer shadow-3xl"
            style={{ backgroundColor: 'gray' }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
