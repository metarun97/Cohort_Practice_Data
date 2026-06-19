import React, { useState } from 'react';

const InpBox = ({ message, setMessage }) => {
  return (
    <input
      className="px-2 py-3 border-slate-400 text-black rounded"
      type="text"
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);
      }}
    />
  );
};

const DisplayChild = ({ message }) => {
  return (
    <div>
      <h1>Typed message : {message}</h1>
    </div>
  );
};

const Parent = () => {
  const [message, setMessage] = useState('');
  return (
    <div>
      <InpBox message={message} setMessage={setMessage} />
      <DisplayChild message={message} />
    </div>
  );
};

export default Parent;
