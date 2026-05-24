import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReactUseEffect2 = () => {
  const [date, setDate] = useState();

  const interval = setInterval(() => {
    const updatedTime = new Date();
    setDate(updatedTime.toLocaleTimeString());
  }, 1000);

  useEffect(() => {
    console.log('time change');
  }, [date]);

  return (
    <div>
      <h1>Date : {date}</h1>
    </div>
  );
};

export default ReactUseEffect2;
