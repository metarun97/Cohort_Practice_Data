"use client"
import React, { useState } from 'react';

const page = () => {

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Change num value {num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  )
}

export default page
