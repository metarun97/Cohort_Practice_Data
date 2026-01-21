import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));

    setText('');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-slate-900 p-4 flex items-center gap-2"
      >
        <input
          className="w-full px-4 py-2 rounded outline-0 border border-slate-300"
          required
          type="text"
          placeholder="Search anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-4 py-2 rounded bg-green-600 cursor-pointer hover:bg-green-700 active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
