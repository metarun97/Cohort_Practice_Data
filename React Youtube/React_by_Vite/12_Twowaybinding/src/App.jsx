import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
