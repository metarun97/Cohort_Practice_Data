import React, { useState } from 'react';

const Colorizer = () => {
  const [color, setColor] = useState('yellow');

  // Hash color generator:-
  function getHexColor() {
    const lettes = '0123456789ABCDEF';
    let hashVal = '#';

    for (let i = 0; i < 6; i++) {
      hashVal += lettes[Math.floor(Math.random() * 16)];
    }
    return hashVal;
  }

  // Change color function:-
  const colorChange = () => {
    console.log('clicked');
    setColor(getHexColor);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        style={{ backgroundColor: color }}
        className="w-72 h-72 border flex justify-center items-center text-white font-bold border-black rounded-md m-5"
      >{color}</div>
      <button
        onClick={colorChange}
        className="bg-red-500 hover:bg-red-600 active:scale-95 transition border-none outline-none rounded text-white font-semibold px-6 py-2 cursor-pointer"
      >
        Change color
      </button>
    </div>
  );
};

export default Colorizer;
