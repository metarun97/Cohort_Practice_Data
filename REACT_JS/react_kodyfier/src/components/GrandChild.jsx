import React, { useContext } from 'react';
import { useBio } from '../store/context';

const GrandChild = () => {
  const { user, age } = useBio();

  return (
    <div>
      <h1>
        {user} is {age} years old.
      </h1>
    </div>
  );
};

export default GrandChild;
