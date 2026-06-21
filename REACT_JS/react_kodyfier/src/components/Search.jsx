import React, { useCallback, useMemo, useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);

  const fruits = [
    'orange',
    'mango',
    'kiwi',
    'banana',
    'grapes',
    'lichi',
    'watermelon',
  ];

  //* useMemo,useCallback and React.memo() Examples here:-

  const handleFilteredFruits = (query) => {
    console.log('Filtering running...');

    return fruits.filter((filterFruit) =>
      filterFruit.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const filteredFruits = useMemo(() => handleFilteredFruits(query), [query]);

  const handleIncrement = () => {
    console.log('Incrementing running...');
    setCount((prev) => prev + 1);
  };

  const handleDecrement = useCallback(() => {
    console.log('Decrementing running...');
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="px-5 flex flex-col items-center gap-5">
      <div className="my-10">
        <button
          className="bg-blue-500 text-white rounded px-2 py-1 my-10"
          onClick={handleIncrement}
        >
          Increment :{count}
        </button>
      </div>
      <input
        className="p-2 rounded text-black"
        type="text"
        placeholder="Search fruit here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {filteredFruits.map((filFruits, idx) => {
          return <li key={idx}>{filFruits}</li>;
        })}
      </div>
      <ChildComponent count={count} handleDecrement={handleDecrement} />
    </div>
  );
};

export default Search;

const ChildComponent = React.memo(({ count, handleDecrement }) => {
  console.log('child component...');
  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded px-2 py-1 my-10"
        onClick={handleDecrement}
      >
        Increment : {count}
      </button>
    </div>
  );
});
